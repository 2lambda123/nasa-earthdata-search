import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import actions from '../../actions/index'
import { encodeUrlQuery } from '../../util/url/url'


const mapDispatchToProps = dispatch => ({
  onChangePath:
    path => dispatch(actions.changePath(path)),
  onChangeUrl:
    query => dispatch(actions.changeUrl(query))
})

const mapStateToProps = state => ({
  boundingBoxSearch: state.query.collection.spatial.boundingBox,
  collections: state.metadata.collections,
  gridName: state.query.collection.gridName,
  gridCoords: state.query.granule.gridCoords,
  featureFacets: state.facetsParams.feature,
  focusedCollection: state.focusedCollection,
  focusedGranule: state.focusedGranule,
  instrumentFacets: state.facetsParams.cmr.instrument_h,
  keywordSearch: state.query.collection.keyword,
  map: state.map,
  organizationFacets: state.facetsParams.cmr.data_center_h,
  overrideTemporalSearch: state.query.collection.overrideTemporal,
  pathname: state.router.location.pathname,
  platformFacets: state.facetsParams.cmr.platform_h,
  pointSearch: state.query.collection.spatial.point,
  polygonSearch: state.query.collection.spatial.polygon,
  processingLevelFacets: state.facetsParams.cmr.processing_level_id_h,
  project: state.project,
  projectFacets: state.facetsParams.cmr.project_h,
  scienceKeywordFacets: state.facetsParams.cmr.science_keywords_h,
  search: state.router.location.search,
  shapefileId: state.shapefile.shapefileId,
  temporalSearch: state.query.collection.temporal,
  timeline: state.timeline
})

export class UrlQueryContainer extends Component {
  componentDidMount() {
    const {
      onChangePath,
      search
    } = this.props

    onChangePath(search)
  }

  componentWillReceiveProps(nextProps) {
    const { search: nextSearch } = nextProps
    const { onChangeUrl, search } = this.props

    // The only time the search prop changes is after the URL has been updated
    // So we only need to worry about encoding the query and updating the URL
    // if the previous search and next search are the same
    if (search === nextSearch) {
      const nextPath = encodeUrlQuery(nextProps)

      if (nextPath !== '') {
        onChangeUrl(nextPath)
      }
    }
  }

  render() {
    const { children } = this.props
    return (
      <>
        { children }
      </>
    )
  }
}

UrlQueryContainer.defaultProps = {
  search: ''
}

UrlQueryContainer.propTypes = {
  children: PropTypes.node.isRequired,
  onChangePath: PropTypes.func.isRequired,
  onChangeUrl: PropTypes.func.isRequired,
  search: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(UrlQueryContainer)
