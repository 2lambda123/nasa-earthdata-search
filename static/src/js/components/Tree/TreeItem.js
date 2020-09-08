import React, {
  useState,
  useRef,
  useEffect
} from 'react'
import PropTypes from 'prop-types'
import { difference } from 'lodash'
import { IconContext } from 'react-icons'
import { FaInfoCircle, FaFolder, FaFolderOpen } from 'react-icons/fa'

import './TreeItem.scss'

export const TreeItem = ({
  index,
  item,
  onChange,
  isFirst,
  isLast,
  collectionId,
  onUpdateSelectedVariables,
  onViewDetails
}) => {
  const {
    checked,
    children,
    expanded,
    fullValue,
    isParent,
    label,
    level,
    value,
    variable = {}
  } = item

  const {
    longName,
    name
  } = variable
  const checkboxElement = useRef(null)
  const [isExpanded, setIsExpanded] = useState(expanded)

  const childItems = () => children.map((child, i) => (
    <TreeItem
      key={`${child.getKey()}`}
      index={index}
      item={child}
      onChange={onChange}
      isFirst={i === 0}
      isLast={i === children.length - 1}
      collectionId={collectionId}
      onUpdateSelectedVariables={onUpdateSelectedVariables}
      onViewDetails={onViewDetails}
    />
  ))

  /**
   * Recursively returns all child values from the give TreeNode item
   * @param {Object} item TreeNode item
   */
  const getChildValues = (item) => {
    const values = []

    Array.from(item.children).forEach(child => values.push(...getChildValues(child)))

    return [
      ...values,
      item.value
    ]
  }

  /**
   * Handle a change in the checkbox
   * @param {Object} e event object
   */
  const handleChange = (e) => {
    const { checked } = e.target

    // If the item is being checked, or is current indeterminate (next state will be checked)
    // call item.setChecked to have the Tree determine the new selectedVariables.
    if (checked || item.checked === 'indeterminate') {
      item.setChecked(checked)
      onChange()
      return
    }

    // If the item is being unchecked, manually remove the selectedVariables from the store.
    // The tree class isn't able to handle removing identical values from multiple parents.
    // The store update will cause the tree class to recalculate the checked values from the selectedVariables.
    const valuesToRemove = [item.value]
    if (item.isParent) {
      // Remove the values from all children of the selected parent
      valuesToRemove.push(...getChildValues(item))
    }

    const newVariables = difference(item.selectedVariables, valuesToRemove)

    onUpdateSelectedVariables(newVariables, collectionId)
  }

  // Updates the indeterminate property of the checkbox when the checked value changes
  useEffect(() => {
    if (checkboxElement.current) {
      checkboxElement.current.indeterminate = checked === 'indeterminate'
    }
  }, [checkboxElement.current, checked])

  /**
   * Sets the new expanded property of the node
   */
  const onToggleExpanded = () => {
    item.setExpanded(!isExpanded)
    setIsExpanded(!isExpanded)
  }

  const isClosed = !isExpanded // && !filterExpanded

  let treeItemClasses = 'tree-item'

  treeItemClasses += ` ${`tree-item--child-${level}`}`
  treeItemClasses += ` ${isParent ? 'tree-item--is-parent' : ''}`
  treeItemClasses += ` ${isFirst ? 'tree-item--is-first' : ''}`
  treeItemClasses += ` ${isLast ? 'tree-item--is-last' : ''}`
  treeItemClasses += ` ${!isClosed ? 'tree-item--is-open' : ''}`
  treeItemClasses += ` ${isLast ? 'tree-item--has-blocker' : ''}`

  return (
    <div
      className={treeItemClasses}
    >
      <div
        className="tree-item__header"
      >
        { isParent && (
          <button
            className="tree-item__parent-button"
            type="button"
            onClick={onToggleExpanded}
          >
            <IconContext.Provider value={{
              style: {
                width: '1.25em'
              }
            }}
            >
              {
                isClosed
                  ? <FaFolder />
                  : <FaFolderOpen />
              }
            </IconContext.Provider>
          </button>
        )}
        <input
          id={fullValue}
          className="tree-item__checkbox"
          type="checkbox"
          value={value}
          onChange={handleChange}
          checked={checked}
          ref={checkboxElement}
        />
        <label
          className="tree-item__label"
          htmlFor={fullValue}
        >
          <div className="tree-item__label-name">
            {name || label}
            {
              item.isLeaf && (
                <button
                  className="tree-item__info-button"
                  type="button"
                  onClick={() => onViewDetails(item.variable, index)}
                >
                  <IconContext.Provider value={{
                    style: {
                      width: '1.25em'
                    }
                  }}
                  >
                    <FaInfoCircle />
                  </IconContext.Provider>
                </button>
              )
            }
          </div>
          <div className="tree-item__label-long-name">
            {longName}
          </div>
        </label>
      </div>
      {
        isExpanded && childItems()
      }
    </div>
  )
}

TreeItem.propTypes = {
  collectionId: PropTypes.string.isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  item: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
  onUpdateSelectedVariables: PropTypes.func.isRequired,
  onViewDetails: PropTypes.func.isRequired
}
