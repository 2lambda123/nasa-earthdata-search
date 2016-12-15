require 'socket'

namespace :data do
  namespace :load do
    desc "Cache data contained in the ECHO 10 format to return with granule results"
    task :echo10 => ['environment'] do
      puts "Starting data:load:echo10"
      log_error('data:load:echo10') do
        CollectionExtra.load_echo10
      end
    end

    desc "Data about granules in collections to return with granule results"
    task :granules => ['environment'] do
      puts "Starting data:load:granules"
      log_error('data:load:granules') do
        CollectionExtra.load
      end
    end

    desc "Sync tags for services"
    task :tags => ['environment'] do
      puts "Starting data:load:tags"
      log_error('data:load:tags') do
        CollectionExtra.sync_tags
      end
    end

    def log_error(task, &block)
      begin
        yield
      rescue
        job = CronJobHistory.new(task_name: task, last_run: Time.now, status: 'failed', message: "#{$!.message}", host: Socket.gethostname)
        puts "Cron job #{task} failed with error #{$!.message}"
        job.save!
        exit 1
      else
        job = CronJobHistory.new(task_name: task, last_run: Time.now, status: 'succeeded', host: Socket.gethostname)
        puts "Cron job #{task} completed successfully."
        job.save!
      end
    end

  end

  desc "Load data from ECHO"
  task :load

  Rake::Task['data:load'].enhance(['data:load:echo10', 'data:load:granules', 'data:load:tags'])

  namespace :dump do
    # Only dump the CollectionExtra model
    task :environment do
      ENV['MODEL'] = 'CollectionExtra'
    end

    # Gets run after db:seed:dump to ensure that seeds.rb is only loaded as needed
    task :headers do
      original_file = 'db/seeds.rb'
      new_file = original_file + '.new'
      File.open(new_file, 'w') do |f|
        lines = ["Cmep::Engine.load_seed if defined?(Cmep)",
                 "load_extra = CollectionExtra.maximum('updated_at').to_i < #{CollectionExtra.maximum('updated_at').to_i}",
                 "!load_extra && puts('CollectionExtra seeds are already up-to-date')",
                 "load_extra && puts('Loading CollectionExtra seeds')",
                 "load_extra && CollectionExtra.destroy_all",
                 "load_extra && "
                 ]
        f.print lines.join("\n")
        File.foreach(original_file) { |line| f.puts(line) }
      end
      File.rename(new_file, original_file)
    end
  end
end

if Rake::Task.task_defined?("db:seed:dump")
  Rake::Task["db:seed:dump"].enhance(['data:dump:environment']) do
    Rake::Task['data:dump:headers'].invoke
  end
end
