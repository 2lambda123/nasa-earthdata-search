import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// import actions from '../../actions/index'
import ProjectPanels from '../../components/ProjectPanels/ProjectPanels'
import { togglePanels, setActivePanel } from '../../actions/projectPanels'


const mapStateToProps = state => ({
  collections: state.metadata.collections,
  collectionsSearch: state.searchResults.collections,
  projectPanels: state.projectPanels
})

const mapDispatchToProps = dispatch => ({
  onTogglePanels:
    value => dispatch(togglePanels(value)),
  onSetActivePanel:
    panelId => dispatch(setActivePanel(panelId))
})

export const ProjectPanelsContainer = ({
  collections,
  collectionsSearch,
  projectPanels,
  onTogglePanels,
  onSetActivePanel
}) => (
  <ProjectPanels
    collections={collections}
    collectionsSearch={collectionsSearch}
    projectPanels={projectPanels}
    onTogglePanels={onTogglePanels}
    onSetActivePanel={onSetActivePanel}
  />
)

ProjectPanelsContainer.propTypes = {
  collections: PropTypes.shape({}).isRequired,
  collectionsSearch: PropTypes.shape({}).isRequired,
  projectPanels: PropTypes.shape({}).isRequired,
  onTogglePanels: PropTypes.func.isRequired,
  onSetActivePanel: PropTypes.func.isRequired
}


export default connect(mapStateToProps, mapDispatchToProps)(ProjectPanelsContainer)
