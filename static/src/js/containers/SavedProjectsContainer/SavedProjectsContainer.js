import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import actions from '../../actions'
import { SavedProjects } from '../../components/SavedProjects/SavedProjects'

const mapStateToProps = state => ({
  savedProjects: state.savedProjects.projects,
  savedProjectsIsLoading: state.savedProjects.isLoading,
  savedProjectsIsLoaded: state.savedProjects.isLoaded
})

const mapDispatchToProps = dispatch => ({
  onDeleteSavedProject: projectId => dispatch(actions.deleteSavedProject(projectId)),
  onFetchSavedProjects: () => dispatch(actions.fetchSavedProjects())
})

export class SavedProjectsContainer extends Component {
  componentDidMount() {
    const {
      onFetchSavedProjects
    } = this.props

    onFetchSavedProjects()
  }

  render() {
    const {
      savedProjects,
      savedProjectsIsLoading,
      savedProjectsIsLoaded,
      onDeleteSavedProject
    } = this.props

    return (
      <SavedProjects
        savedProjects={savedProjects}
        savedProjectsIsLoading={savedProjectsIsLoading}
        savedProjectsIsLoaded={savedProjectsIsLoaded}
        onDeleteSavedProject={onDeleteSavedProject}
      />
    )
  }
}

SavedProjectsContainer.defaultProps = {
  savedProjects: []
}

SavedProjectsContainer.propTypes = {
  savedProjects: PropTypes.arrayOf(
    PropTypes.shape({})
  ),
  savedProjectsIsLoading: PropTypes.bool.isRequired,
  savedProjectsIsLoaded: PropTypes.bool.isRequired,
  onDeleteSavedProject: PropTypes.func.isRequired,
  onFetchSavedProjects: PropTypes.func.isRequired
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SavedProjectsContainer)
)
