class HealthController < ApplicationController
  respond_to :json

  def index
    health = Health.new
    cmr_status = health.cmr_status(echo_client)
    cmr_search_status = health.cmr_search_status(echo_client)
    if cmr_status[:ok?] && cmr_search_status[:ok?]
      response = {
          edsc: nil,
          background_jobs: {
              delayed_job: health.delayed_job_status,
              data_load_tags: health.data_load_tags_status,
              data_load_echo10: health.data_load_echo10_status,
              data_load_granules: health.data_load_granules_status,
              colormaps_load: health.colormap_load_status,
          },
          dependencies: {
              echo: health.echo_status(echo_client),
              cmr: cmr_status,
              cmr_search: cmr_search_status,
              opensearch: health.opensearch_status(echo_client),
              browse_scaler: health.browse_scaler_status(echo_client),
              urs: health.urs_status(echo_client)}
      }
      response[:edsc] = health.edsc_status
      respond_with(response, status: :ok)
    else
      head :service_unavailable
    end
  end
end
