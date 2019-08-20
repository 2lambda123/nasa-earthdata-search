import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button/Button'

import './GranuleFiltersActions.scss'

/**
 * Renders GranuleFiltersActions.
 * @param {Object} props - The props passed into the component.
 * @param {Object} props.onApplyClick - Callback function to apply the granule filters.
 * @param {Object} props.onClearClick - Callback function to clear the granule filters.
 */
export const GranuleFiltersActions = ({
  isValid,
  onApplyClick,
  onClearClick
}) => (
  <div className="granule-filters-actions">
    <Button
      className="granule-filters-actions__action granule-filters-actions__action--apply"
      type="submit"
      label="Apply Filters"
      bootstrapVariant="primary"
      onClick={e => onApplyClick(e)}
      disabled={!isValid}
    >
      Apply
    </Button>
    <Button
      className="granule-filters-actions__action granule-filters-actions__action--clear"
      label="Clear Filters"
      bootstrapVariant="secondary"
      onClick={e => onClearClick(e)}
    >
      Clear
    </Button>
  </div>
)

GranuleFiltersActions.propTypes = {
  isValid: PropTypes.bool.isRequired,
  onApplyClick: PropTypes.func.isRequired,
  onClearClick: PropTypes.func.isRequired
}

export default GranuleFiltersActions
