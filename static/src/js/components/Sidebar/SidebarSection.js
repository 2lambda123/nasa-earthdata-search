import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'

import Button from '../Button/Button'
import EDSCIcon from '../EDSCIcon/EDSCIcon'
import MoreActionsDropdown from '../MoreActionsDropdown/MoreActionsDropdown'
import MoreActionsDropdownItem from '../MoreActionsDropdown/MoreActionsDropdownItem'
import PortalLinkContainer from '../../containers/PortalLinkContainer/PortalLinkContainer'

import './SidebarSection.scss'

/**
 * Renders SidebarSection.
 * @param {Object} props - The props passed into the component.
 * @param {Node} props.children - The content of the sidebar
 * @param {Object} props.headerAction - An object configuring the header action button
 * @param {Array} props.moreActionsDropdownItems - An array of objects configuring the a more actions menu
 * @param {Boolean} props.padded - A flag designating whether or not the section should have its own padding
 * @param {String} props.sectionTitle - A string to use as the section title
 * @param {String} props.titleIcon - The icon to be used in the title
 */
const SidebarSection = (props) => {
  const {
    children,
    headerAction,
    moreActionsDropdownItems,
    padded,
    sectionTitle,
    titleIcon,
    onClick
  } = props

  const classes = classNames([
    'sidebar-section',
    {
      'sidebar-section--padded': padded
    }
  ])

  const {
    title: headerActionTitle,
    onClick: headerActionOnClick
  } = headerAction

  let headerProps = {}

  if (onClick) {
    // If onClick has been defined, add some extra props to the .sidebar-section__header-primary div
    headerProps = {
      onClick,
      onKeyUp: onClick,
      role: 'button',
      tabIndex: 0
    }
  }

  return (
    <section className={classes}>
      {
        (sectionTitle || moreActionsDropdownItems.length > 0) && (
          <header className="sidebar-section__header">
            <div
              className="sidebar-section__header-primary"
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...headerProps}
            >
              <h2 className="sidebar-section__title">
                {titleIcon && <EDSCIcon className="sidebar-section__title-icon" icon={titleIcon} />}
                {sectionTitle}
              </h2>
            </div>
            <div className="sidebar-section__header-secondary">
              {
                (headerActionTitle && headerActionOnClick) && (
                  <Button
                    className="sidebar-section__header-action"
                    type="button"
                    bootstrapSize="sm"
                    bootstrapVariant="primary"
                    onClick={headerActionOnClick}
                    label={headerActionTitle}
                  >
                    {headerActionTitle}
                  </Button>
                )
              }
              {
                (headerActionTitle && !headerActionOnClick) && headerActionTitle
              }
              {
                (moreActionsDropdownItems.length > 0) && (
                  <MoreActionsDropdown
                    className="sidebar-section__more-actions"
                    dark
                  >
                    {
                      moreActionsDropdownItems.map((moreActionsDropdownItem, i) => {
                        const key = JSON.stringify(moreActionsDropdownItem) + i
                        const {
                          title,
                          icon,
                          link,
                          onClick = () => {}
                        } = moreActionsDropdownItem

                        let item = (
                          <MoreActionsDropdownItem
                            key={`${key}_item`}
                            title={title}
                            icon={icon}
                            onClick={onClick}
                          />
                        )

                        if (link) {
                          const {
                            pathname = '',
                            search = ''
                          } = link

                          item = (
                            <PortalLinkContainer
                              key={`${key}_portal-link`}
                              to={{
                                pathname,
                                search
                              }}
                            >
                              {item}
                            </PortalLinkContainer>
                          )
                        }

                        return item
                      })
                    }
                  </MoreActionsDropdown>
                )
              }
            </div>
          </header>
        )
      }
      {children}
    </section>
  )
}

SidebarSection.defaultProps = {
  children: null,
  footerButtonProps: {},
  headerAction: {},
  moreActionsDropdownItems: [],
  sectionTitle: null,
  titleIcon: null,
  padded: false,
  onClick: null
}

SidebarSection.propTypes = {
  children: PropTypes.node,
  footerButtonProps: PropTypes.shape({}),
  headerAction: PropTypes.shape({
    onClick: PropTypes.func,
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node
    ])
  }),
  moreActionsDropdownItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      link: PropTypes.shape({
        pathname: PropTypes.string,
        search: PropTypes.string
      })
    })
  ),
  padded: PropTypes.bool,
  sectionTitle: PropTypes.string,
  titleIcon: PropTypes.func,
  onClick: PropTypes.func
}

export default SidebarSection
