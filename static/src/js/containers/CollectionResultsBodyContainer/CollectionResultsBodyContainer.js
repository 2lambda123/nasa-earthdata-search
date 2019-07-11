import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  withRouter
} from 'react-router-dom'

import actions from '../../actions/index'

import CollectionResultsBody from '../../components/CollectionResults/CollectionResultsBody'

const mapStateToProps = state => ({
  collections: state.searchResults.collections,
  project: state.project,
  query: state.query.collection
})

const mapDispatchToProps = dispatch => ({
  onAddProjectCollection:
    collectionId => dispatch(actions.addProjectCollection(collectionId)),
  onRemoveCollectionFromProject:
    collectionId => dispatch(actions.removeCollectionFromProject(collectionId)),
  onViewCollectionGranules:
    collectionId => dispatch(actions.viewCollectionGranules(collectionId)),
  onViewCollectionDetails:
    collectionId => dispatch(actions.viewCollectionDetails(collectionId)),
  onChangeCollectionPageNum:
    data => dispatch(actions.changeCollectionPageNum(data))
})

export const CollectionResultsBodyContainer = (props) => {
  const {
    collections,
    query,
    location,
    project,
    onAddProjectCollection,
    onRemoveCollectionFromProject,
    onViewCollectionGranules,
    onViewCollectionDetails,
    onChangeCollectionPageNum
  } = props

  const { collectionIds: projectIds } = project

  const onWaypointEnter = (params = {}) => {
    if (params.event !== null) {
      const { pageNum } = query
      onChangeCollectionPageNum(pageNum + 1)
    }
  }

  return (
    <CollectionResultsBody
      collections={collections}
      projectIds={projectIds}
      location={location}
      onAddProjectCollection={onAddProjectCollection}
      onRemoveCollectionFromProject={onRemoveCollectionFromProject}
      onViewCollectionGranules={onViewCollectionGranules}
      onViewCollectionDetails={onViewCollectionDetails}
      waypointEnter={onWaypointEnter}
    />
  )
}

CollectionResultsBodyContainer.propTypes = {
  collections: PropTypes.shape({}).isRequired,
  query: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
  project: PropTypes.shape({}).isRequired,
  onAddProjectCollection: PropTypes.func.isRequired,
  onRemoveCollectionFromProject: PropTypes.func.isRequired,
  onViewCollectionGranules: PropTypes.func.isRequired,
  onViewCollectionDetails: PropTypes.func.isRequired,
  onChangeCollectionPageNum: PropTypes.func.isRequired
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CollectionResultsBodyContainer)
)
