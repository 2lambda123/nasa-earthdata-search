import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { isEqual } from 'lodash'

import { isProjectValid } from '../../util/isProjectValid'

import Button from '../Button/Button'
import ProjectHeader from './ProjectHeader'
import ProjectCollectionsList from './ProjectCollectionsList'

import './ProjectCollections.scss'

/**
 * Renders ProjectCollections.
 * @param {object} props - The props passed into the component.
 * @param {object} props.collections - List of collections passed from redux store.
 * @param {function} props.onRemoveCollectionFromProject - Fired when the remove button is clicked
 */
export class ProjectCollections extends Component {
  constructor() {
    super()

    this.sentDataAccessMetrics = false
    this.sendDataAccessMetrics = this.sendDataAccessMetrics.bind(this)
  }

  componentDidMount() {
    this.sentDataAccessMetrics = false
  }

  componentDidUpdate(prevProps) {
    const { project } = prevProps
    const { project: nextProject } = this.props

    if (!this.sentDataAccessMetrics && !isEqual(project, nextProject)) {
      this.sendDataAccessMetrics()
    }
  }

  componentWillUnmount() {
    this.sentDataAccessMetrics = false
  }

  sendDataAccessMetrics() {
    const { project, onMetricsDataAccess } = this.props
    const projectCollectionIds = project.collectionIds
    projectCollectionIds.forEach((id) => {
      onMetricsDataAccess({
        type: 'data_access_init',
        collections: [{
          collectionId: id
        }]
      })
    })

    this.sentDataAccessMetrics = true
  }

  render() {
    const {
      collectionSearch,
      collections,
      onMetricsDataAccess,
      onRemoveCollectionFromProject,
      onSetActivePanel,
      onToggleCollectionVisibility,
      onUpdateProjectName,
      project,
      projectPanels,
      savedProject
    } = this.props

    const {
      valid: isValid,
      tooManyGranules,
      zeroGranules
    } = isProjectValid(project, collections)
    const { isSubmitting } = project

    const isLoading = collections.allIds.every((collectionId) => {
      const { byId } = collections
      const collection = byId[collectionId]
      const { granules = {} } = collection

      return Object.keys(granules).length === 0
    })

    return (
      <section className="project-collections">
        <ProjectHeader
          collections={collections}
          project={project}
          savedProject={savedProject}
          onUpdateProjectName={onUpdateProjectName}
        />
        <ProjectCollectionsList
          collections={collections}
          onMetricsDataAccess={onMetricsDataAccess}
          onRemoveCollectionFromProject={onRemoveCollectionFromProject}
          onToggleCollectionVisibility={onToggleCollectionVisibility}
          onSetActivePanel={onSetActivePanel}
          project={project}
          projectPanels={projectPanels}
          collectionSearch={collectionSearch}
        />
        <div className="project-collections__footer">
          {
            !isLoading && (
              <p className="project-collections__footer-message">
                {
                  !isValid && !tooManyGranules && !zeroGranules && (
                    <>
                      {'Select a data access method for each collection in your project before downloading.'}
                    </>
                  )
                }
                {
                  isValid && (
                    <>
                      {`Click ${String.fromCharCode(8220)}Edit Options${String.fromCharCode(8221)} above to customize the output for each project.`}
                    </>
                  )
                }
                {
                  !isValid && tooManyGranules && (
                    <>
                      {'One or more collections in your project contains too many granules. Adjust temporal constraints or remove the collections before downloading.'}
                    </>
                  )
                }
                {
                  !isValid && zeroGranules && (
                    <>
                      {'One or more collections in your project contains zero granules. Adjust temporal constraints or remove the collections before downloading.'}
                    </>
                  )
                }
              </p>
            )
          }

          <Button
            type="submit"
            variant="full"
            bootstrapVariant="success"
            icon="download"
            label="Download project data"
            disabled={!isValid}
            spinner={isSubmitting}
          >
            Download Data
          </Button>
        </div>
      </section>
    )
  }
}

ProjectCollections.propTypes = {
  collections: PropTypes.shape({}).isRequired,
  collectionSearch: PropTypes.shape({}).isRequired,
  project: PropTypes.shape({}).isRequired,
  projectPanels: PropTypes.shape({}).isRequired,
  savedProject: PropTypes.shape({}).isRequired,
  onMetricsDataAccess: PropTypes.func.isRequired,
  onRemoveCollectionFromProject: PropTypes.func.isRequired,
  onToggleCollectionVisibility: PropTypes.func.isRequired,
  onSetActivePanel: PropTypes.func.isRequired,
  onUpdateProjectName: PropTypes.func.isRequired
}

export default ProjectCollections
