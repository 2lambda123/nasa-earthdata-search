require 'digest/sha1'
module VCR
  class SplitPersister

    attr_reader :normalizers

    def initialize(source_serializer, destination_serializer, persister)
      @source_serializer = source_serializer
      @destination_serializer = destination_serializer
      @persister = persister
      @storage = {}
      @normalizers = []
    end

    def [](name)
      return @storage[name.to_s] if @storage[name.to_s].present?

      requests_name = file_name(name, 'requests')
      responses_name = file_name(name, 'responses')

      persisted_requests = @persister[file_name(name, 'requests')]
      persisted_responses = @persister[file_name(name, 'responses')]

      return nil if persisted_requests.nil? || persisted_responses.nil?

      requests = @destination_serializer.deserialize(persisted_requests)
      responses = @destination_serializer.deserialize(persisted_responses)

      obj = {'http_interactions' => []}

      requests.each do |k, v|
        if k == 'http_interactions'
          v.each do |interaction|
            response = responses[interaction.delete('digest')]
            unless response.nil?
              interaction.merge!(response)
              normalizers.each do |normalizer|
                normalizer.reverse(interaction)
              end
              obj[k] << interaction
            end
          end
        else
          obj[k] = v
        end
      end

      @storage[name] = @source_serializer.serialize(obj)
    end

    def []=(name, content)
      @storage.delete(name.to_s)
      obj = @source_serializer.deserialize(content)

      requests = {'http_interactions' => []}
      responses = {}

      obj.each do |k, v|
        if k == 'http_interactions'
          v = v.sort_by {|interaction| unique_key(interaction)}
          v.each do |interaction|
            response = interaction.extract!('response')
            normalizers.each do |normalizer|
              normalizer.forward(interaction)
            end
            digest = Digest::SHA1.hexdigest(unique_key(interaction))
            interaction['digest'] = digest
            requests[k] << interaction
            if interaction['request']['uri'].include?('include_facets=true')
              responses[digest] = reduce_facet_size(response)
            else
              responses[digest] = response
            end
          end
        else
          requests[k] = v
        end
      end


      @persister[file_name(name, 'requests')] = @destination_serializer.serialize(requests)
      @persister[file_name(name, 'responses')] = @destination_serializer.serialize(responses)
      content
    end

    def absolute_path_to_file(*args)
      @persister.absolute_path_to_file(*args)
    end

    private

    def unique_key(interaction)
      req = interaction['request']
      "#{req['uri']}::#{req['method']}::#{req['body']['string']}"
    end

    def file_name(root, type)
      "#{root}#{type}.#{@destination_serializer.file_extension}"
    end

    # Big temporary hacks to reduces the size of facets we're recording. Right now if
    # we record all of them, our collection_responses.yml is about 20MB. The CMR will
    # fix the need for this with upcoming facet changes.
    # This method ensures that there are no more than 5 facets of any type returned
    # and that the hierarchy doesn't go below variable_level_1
    def reduce_facet_size(response)
      return response unless (response.present? &&
                              response['response'].present? &&
                              response['response']['headers'].present? &&
                              response['response']['headers']['content-type'].present? &&
                              response['response']['headers']['content-type'][0].start_with?('application/json'))
      body = ActiveSupport::JSON.decode(response['response']['body']['string'])
      if body && body['feed'] && body['feed']['facets'] && !body['feed']['reduced']
        before = response['response']['body']['string'].size
        Echo::ClientMiddleware::FacetCullingMiddleware.cull(body)
        response['response']['body']['string'] = body.to_json
        after = response['response']['body']['string'].size
        puts "Reduced: #{before} -> #{after}"
      end
      response['response']['reduced'] = true
      response
    end

  end
end
