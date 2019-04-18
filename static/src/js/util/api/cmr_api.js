import API from '../api'

export const collectionsEndpoints = {
  name: 'collections',
  endpoints: [
    {
      name: 'getAll',
      callback: ({
        boundingBox,
        collectionDataType,
        dataCenterH,
        hasGranules,
        hasGranulesOrCwic,
        includeFacets,
        includeGranuleCounts,
        includeHasGranules,
        includeTags,
        instrumentH,
        keyword,
        options,
        pageNum,
        pageSize,
        platformH,
        point,
        polygon,
        processingLevelId,
        projectH,
        scienceKeywordsH,
        sortKey,
        tagKey,
        temporal
      } = {}) => API.post('collections', {
        params: {
          bounding_box: boundingBox,
          collection_data_type: collectionDataType,
          data_center_h: dataCenterH,
          has_granules_or_cwic: hasGranulesOrCwic,
          has_granules: hasGranules,
          include_facets: includeFacets,
          include_granule_counts: includeGranuleCounts,
          include_has_granules: includeHasGranules,
          include_tags: includeTags,
          instrument_h: instrumentH,
          keyword,
          options,
          page_num: pageNum,
          page_size: pageSize,
          platform_h: platformH,
          point,
          polygon,
          processing_level_id_h: processingLevelId,
          project_h: projectH,
          science_keywords_h: scienceKeywordsH,
          sort_key: sortKey,
          tag_key: tagKey,
          temporal
        }
      })
    },
    {
      name: 'getOne',
      callback: ({
        collectionId,
        includeTags
      } = {}) => API.post('collections', {
        params: {
          concept_id: collectionId,
          include_tags: includeTags
        }
      })
    }
  ]
}

export const granulesEndpoints = {
  name: 'granules',
  endpoints: [
    {
      name: 'getAll',
      callback: ({
        collectionId,
        pageNum,
        pageSize,
        sortKey
      } = {}) => API.post(`granules/${collectionId}`, {
        params: {
          echo_collection_id: collectionId,
          page_num: pageNum,
          page_size: pageSize,
          sort_key: sortKey
        }
      })
    },
    {
      name: 'getOne',
      callback: ({ granuleId } = {}) => API.get(`granules/${granuleId}`)
    }
  ]
}

export const timelineEndpoints = {
  name: 'timeline',
  endpoints: [{
    name: 'getAll',
    callback: ({
      collectionId,
      endDate,
      interval,
      pageNum,
      pageSize,
      sortKey,
      startDate
    } = {}) => API.post('granules/timeline', {
      params: {
        echo_collection_id: collectionId,
        end_date: endDate,
        interval,
        page_num: pageNum,
        page_size: pageSize,
        sort_key: sortKey,
        start_date: startDate
      }
    })
  }]
}
