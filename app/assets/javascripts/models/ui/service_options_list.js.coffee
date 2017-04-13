ns = @edsc.models.ui

ns.ServiceOptionsList = do (ko, $=jQuery, config=@edsc.models.data.config) ->
  class ServiceOptionsList
    constructor: (@accountForm, @project) ->
      @activeIndex = ko.observable(0)
      @showGranules = ko.observable(false)
      @needsContactInfo = ko.computed =>
        for collection in @project.accessCollections()
          for m in collection.serviceOptions.accessMethod()
            method = m.method()
            return true if method? && method != 'Download'
        false
      @isLastOption = ko.computed =>
        collections = @project.accessCollections()
        @activeIndex() == collections.length - 1 && !@needsContactInfo()

    checkOrderSize: =>
      for accessCollection in @project.accessCollections()
        # find current collection
        if accessCollection.collection.id == this._currentCollection().id
          # number of granules in the order
          if accessCollection.granuleAccessOptions().hits > 2000
            for checkedAccessMethod in accessCollection.serviceOptions.accessMethod()
              checkedAccessMethodName = checkedAccessMethod.method()
              for method in accessCollection.serviceOptions.granuleAccessOptions().methods
                # method.type == 'download': continue without chunking
                # method.type == 'order':    ASTER ? first 2000 granules : chunking
                # method.type == 'service':  enabled ? (ASTER ? first 100 : chunking) : first 2000.
                if method.name == checkedAccessMethodName &&
                  method.type != 'download' &&
                  (method.type == 'order' || method.type == 'service' && edsc.config.enableEsiOrderChunking ) &&
                  accessCollection.collection.id not in edsc.config.asterCollections
                    numberOfOrders = Math.ceil(accessCollection.granuleAccessOptions().hits / 2000)
                    $("#number-of-orders").text(numberOfOrders)
                    $("#tooManyGranulesModal").modal('show')
                    return true
            @showNext()
            return true
          else
            @showNext()
            return true

    isEsiOrderChunkingEnabled: ->
      edsc.config.enableEsiOrderChunking

    isLimitedCollection: (projectCollection) ->
      projectCollection.collection.id in edsc.config.asterCollections

    showNext: =>
      $("#tooManyGranulesModal").modal('hide')
      @_moveActiveIndex(@activeIndex() + 1)

    showPrevious: =>
      @_moveActiveIndex(@activeIndex() - 1)

    _moveActiveIndex: (newIndex) =>
      if @showGranules()
        @_currentCollection().notifyRenderers('endAccessPreview')
      @activeIndex(newIndex)
      if @showGranules()
        @_currentCollection().notifyRenderers('startAccessPreview')

    submitRequest: =>
      $('.access-submit').prop('disabled', true)
      if @needsContactInfo() && @accountForm.isEditingNotificationPreference()
        @accountForm.saveAccountEdit =>
          @downloadProject()
        # re-enable button if saveAccountEdit fails
        $('.access-submit').prop('disabled', false)
      else
        @downloadProject()

    showGranuleList: =>
      @showGranules(true)
      @_currentCollection().notifyRenderers('startAccessPreview')

    hideGranuleList: =>
      @_currentCollection().notifyRenderers('endAccessPreview')
      @showGranules(false)

    scrolled: (data, event) =>
      elem = event.target
      if (elem.scrollTop > (elem.scrollHeight - elem.offsetHeight - 40))
        collection = @project.accessCollections()[@activeIndex()].collection
        collection.granuleDatasource().data().loadNextPage()

    downloadProject: ->
      $project = $('#data-access-project')

      $project.val(JSON.stringify(@project.serialize()))
      $('#data-access').submit()

    _currentCollection: ->
      @project.accessCollections()[@activeIndex()].collection


  exports = ServiceOptionsList
