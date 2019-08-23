import React from 'react'
import PropTypes from 'prop-types'
import { pure } from 'recompose'

import ProjectPanelSection from './ProjectPanelSection'

import './VariableDetailsPanel.scss'

export const VariableDetailsPanel = (props) => {
  const {
    variable
  } = props

  if (!variable) return null

  const { umm } = variable
  const {
    Definition: definition = 'No definition available for this variable.',
    LongName: longName,
    Name: name
  } = umm

  return (
    <div className="variable-details-panel">
      <ProjectPanelSection>
        <header className="variable-details-panel__header">
          <h2 className="variable-details-panel__heading">
            {name}
          </h2>
        </header>
        <dl>
          <dt className="variable-details-panel__longname">
            {longName}
          </dt>
          <dd className="variable-details-panel__description">
            {definition}
          </dd>
        </dl>
      </ProjectPanelSection>
    </div>
  )
}

VariableDetailsPanel.defaultProps = {
  variable: undefined
}

VariableDetailsPanel.propTypes = {
  variable: PropTypes.shape({})
}

export default pure(VariableDetailsPanel)
