import React from 'react'
import { PropTypes } from 'prop-types'
import {
  withRouter,
  Link
} from 'react-router-dom'

import ProjectCollectionItem from './ProjectCollectionsItem'
import { colors, getColorByIndex } from '../../util/colors'

import './ProjectCollectionsList.scss'

/**
 * Renders ProjectCollectionsList.
 * @param {object} props - The props passed into the component.
 * @param {object} props.collections - List of collections passed from redux store.
 * @param {function} props.onRemoveCollectionFromProject - Fired when the remove button is clicked
 */
export const ProjectCollectionsList = (props) => {
  const {
    collections,
    loading,
    onRemoveCollectionFromProject,
    onToggleCollectionVisibility,
    location,
    onSetActivePanel,
    projectPanels
  } = props

  const {
    byId,
    projectIds
  } = collections

  const projectIsEmpty = !projectIds.length

  const activePanel = projectPanels.isOpen ? projectPanels.activePanel.split('.')[1] : null

  const collectionsList = projectIds.map((collectionId, index) => {
    const isPanelActive = activePanel === index.toString()
    const color = getColorByIndex(index, colors)
    return (
      <ProjectCollectionItem
        collectionId={collectionId}
        collection={byId[collectionId]}
        color={color}
        index={index}
        isPanelActive={isPanelActive}
        key={collectionId}
        onRemoveCollectionFromProject={onRemoveCollectionFromProject}
        onToggleCollectionVisibility={onToggleCollectionVisibility}
        onSetActivePanel={onSetActivePanel}
      />
    )
  })

  return (
    <div className="project-collections-list">
      {projectIsEmpty && (
        <p className="project-collections-list__notice">
          {'Your project is empty. Click '}
          <Link
            to={`/search${location.search}`}
          >
            here
          </Link>
          {' to return to search and add collections to your project.'}
        </p>
      )}
      {!projectIsEmpty && (
        <ul className="project-collections-list__list">
          {loading && (
            <></>
          )}
          {!loading && collectionsList}
        </ul>
      )}
      <div className="project-collections-list__filler" />
    </div>
  )
}

ProjectCollectionsList.propTypes = {
  collections: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
  location: PropTypes.shape({}).isRequired,
  onRemoveCollectionFromProject: PropTypes.func.isRequired,
  onToggleCollectionVisibility: PropTypes.func.isRequired,
  onSetActivePanel: PropTypes.func.isRequired,
  projectPanels: PropTypes.shape({}).isRequired
}

export default withRouter(ProjectCollectionsList)
