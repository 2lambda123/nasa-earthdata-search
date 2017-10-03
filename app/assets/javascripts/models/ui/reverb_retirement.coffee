ns = @edsc.models.ui
data = @edsc.models.data

ns.ReverbRetirement = do (ko,
                          ajax = @edsc.util.xhr.ajax,
                          config=@edsc.models.data.config) ->
  class ReverbRetirement
    constructor: ->

    referrerIsReverb: () =>
      console.log "Checking referrer: " + document.referrer
      console.log "Checking referrer against ENV value: " + edsc.config.reverb_url
      referrer = if document.referrer then document.referrer.match(/:\/\/(.[^/]+)/)[1] else false
      reverb = if edsc.config.reverb_url then edsc.config.reverb_url.match(/:\/\/(.[^/]+)/)[1] else false
      return referrer == reverb && referrer

    returnToReverb: (source) =>
      Cookies.set('ReadyForReverbRetirement', 'false', { expires: 120 })
      data['type'] = 'reverb_redirect'
      data['data'] = 'back_to_reverb'
      data['other_data'] = "{source: '" + source + "'}"
      ajax
        data: JSON.parse(JSON.stringify(data))
        dataType: 'json'
        url: "/metrics"
        method: 'post'
        success: (data) ->
          console.log data
      $('<form action="' + edsc.config.reverb_url + '"></form>').appendTo('body').submit();    
    
    stayWithEDSC: () =>
      Cookies.set('ReadyForReverbRetirement', 'true', { expires: 120 })

      data['type'] = 'reverb_redirect'
      data['data'] = 'stay_in_edsc'
      data['other_data'] = null
      ajax
        data: JSON.parse(JSON.stringify(data))
        dataType: 'json'
        url: "/metrics"
        method: 'post'
        success: (data) ->
          console.log data
      $('#reverbRetirementModal').modal('hide')
    
  exports = ReverbRetirement
