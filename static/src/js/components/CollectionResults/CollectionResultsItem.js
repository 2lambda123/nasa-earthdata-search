import React from 'react'
import PropTypes from 'prop-types'
import { Badge, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Waypoint } from 'react-waypoint'

import { commafy } from '../../util/commafy'
import { pluralize } from '../../util/pluralize'
import { getApplicationConfig } from '../../../../../sharedUtils/config'

import Button from '../Button/Button'
import SplitBadge from '../SplitBadge/SplitBadge'

import './CollectionResultsItem.scss'

export const CollectionResultsItem = ({
  collection,
  isCollectionInProject,
  isLast,
  onAddProjectCollection,
  onRemoveCollectionFromProject,
  onViewCollectionDetails,
  onViewCollectionGranules,
  waypointEnter
}) => {
  const {
    dataset_id: datasetId = null,
    granule_count: granuleCount = 0,
    has_formats: hasFormats = false,
    has_spatial_subsetting: hasSpatialSubsetting = false,
    has_temporal_subsetting: hasTemporalSubsetting = false,
    has_transforms: hasTransforms = false,
    has_variables: hasVariables = false,
    has_map_imagery: hasMapImagery = false,
    is_cwic: isCwic = false,
    is_nrt: isNrt = false,
    is_opendap: isOpendap = false,
    organizations = [],
    summary = '',
    thumbnail = null,
    time_end: timeEnd = null,
    time_start: timeStart = null
  } = collection

  let displayOrganization = ''

  if (organizations && organizations.length) {
    [displayOrganization] = organizations
  }

  let timeRange = ''

  if (timeStart || timeEnd) {
    if (timeStart) {
      const dateStart = new Date(timeStart).toISOString().split('T')[0]

      timeRange = `${dateStart} ongoing`
    }
    if (timeEnd) {
      const dateEnd = new Date(timeEnd).toISOString().split('T')[0]

      timeRange = `Up to ${dateEnd}`
    }

    if (timeStart && timeEnd) {
      const dateStart = new Date(timeStart).toISOString().split('T')[0]
      const dateEnd = new Date(timeEnd).toISOString().split('T')[0]

      timeRange = `${dateStart} to ${dateEnd}`
    }
  }

  const description = summary.length > 280 ? `${summary.substring(0, 280)}...` : summary
  const thumbnailHeight = getApplicationConfig().thumbnailSize.height
  const thumbnailWidth = getApplicationConfig().thumbnailSize.width

  let customizeBadges = null

  if (isOpendap) {
    customizeBadges = []

    if (hasSpatialSubsetting) {
      customizeBadges.push((
        <OverlayTrigger
          key="badge-icon__spatial-subsetting"
          placement="top"
          overlay={(
            <Tooltip
              id="tooltip_customize-spatial-subsetting"
              className="collection-results-item__badge-tooltip collection-results-item__badge-tooltip--icon"
            >
              Spatial customizable options available
            </Tooltip>
          )}
        >
          <i className="fa fa-globe collection-results-item__badge-icon" />
        </OverlayTrigger>
      ))
    }

    if (hasVariables) {
      customizeBadges.push((
        <OverlayTrigger
          key="badge-icon__variables"
          placement="top"
          overlay={(
            <Tooltip
              id="tooltip_customize-variables"
              className="collection-results-item__badge-tooltip collection-results-item__badge-tooltip--icon"
            >
              Variable customizable options available
            </Tooltip>
          )}
        >
          <i className="fa fa-tags collection-results-item__badge-icon" />
        </OverlayTrigger>
      ))
    }

    if (hasTransforms) {
      customizeBadges.push((
        <OverlayTrigger
          key="badge-icon__transforms"
          placement="top"
          overlay={(
            <Tooltip
              id="tooltip_customize-transforms"
              className="collection-results-item__badge-tooltip collection-results-item__badge-tooltip--icon"
            >
              Data transformation options available
            </Tooltip>
          )}
        >
          <i className="fa fa-sliders collection-results-item__badge-icon" />
        </OverlayTrigger>
      ))
    }

    if (hasFormats) {
      customizeBadges.push((
        <OverlayTrigger
          key="badge-icon__formats"
          placement="top"
          overlay={(
            <Tooltip
              id="tooltip_customize-formats"
              className="collection-results-item__badge-tooltip collection-results-item__badge-tooltip--icon"
            >
              Reformatting options available
            </Tooltip>
          )}
        >
          <i className="fa fa-file-text-o collection-results-item__badge-icon" />
        </OverlayTrigger>
      ))
    }

    if (hasTemporalSubsetting) {
      customizeBadges.push((
        <OverlayTrigger
          key="badge-icon__temporal-subsetting"
          placement="top"
          overlay={(
            <Tooltip
              id="tooltip_customize-temporal-subsetting"
              className="collection-results-item__badge-tooltip collection-results-item__badge-tooltip--icon"
            >
              Temporal subsetting options available
            </Tooltip>
          )}
        >
          <i className="fa fa-clock-o collection-results-item__badge-icon" />
        </OverlayTrigger>
      ))
    }

    if (customizeBadges.length === 0) customizeBadges = null
  }

  const addToProjectButton = (
    <Button
      className="collection-results-item__action collection-results-item__action--add"
      onClick={(e) => {
        onAddProjectCollection(collection.id)
        e.stopPropagation()
      }}
      variant="light"
      bootstrapVariant="light"
      icon="plus"
      label="Add collection to the current project"
      title="Add collection to the current project"
    />
  )

  const removeFromProjectButton = (
    <Button
      className="collection-results-item__action collection-results-item__action--remove"
      onClick={(e) => {
        onRemoveCollectionFromProject(collection.id)
        e.stopPropagation()
      }}
      variant="light"
      bootstrapVariant="light"
      icon="minus"
      label="Remove collection from the current project"
      title="Remove collection from the current project"
    />
  )

  return (
    <li className="collection-results-item" key={collection.id}>
      <div
        role="button"
        tabIndex="0"
        className="collection-results-item__link"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            onViewCollectionGranules(collection.id)
          }
          e.stopPropagation()
        }}
        onClick={(e) => {
          onViewCollectionGranules(collection.id)
          e.stopPropagation()
        }}
      >
        <div className="collection-results-item__thumb">
          {
            thumbnail && (
              <img
                className="collection-results-item__thumb-image"
                src={thumbnail}
                alt={`Thumbnail for ${datasetId}`}
                height={thumbnailHeight}
                width={thumbnailWidth}
              />
            )
          }
        </div>
        <div className="collection-results-item__body">
          <div className="collection-results-item__body-primary">
            <div className="collection-results-item__info">
              <h3 className="collection-results-item__title">
                {datasetId}
              </h3>
              <p className="collection-results-item__desc">
                {
                  isCwic && (
                    <strong>Int&apos;l / Interagency</strong>
                  )
                }
                {
                  !isCwic && (
                    <strong>{`${commafy(granuleCount)} ${pluralize('Granule', granuleCount)}`}</strong>
                  )
                }
                <strong> &bull; </strong>
                <strong>{timeRange}</strong>
                <strong> &bull; </strong>
                {description}
              </p>
            </div>
            <div className="collection-results-item__actions">
              <Button
                className="collection-results-item__action collection-results-item__action--collection-details"
                onClick={(e) => {
                  onViewCollectionDetails(collection.id)
                  e.stopPropagation()
                }}
                label="View collection details"
                title="View collection details"
                bootstrapVariant="light"
                icon="info-circle"
              />
              {
                isCollectionInProject && removeFromProjectButton
              }
              {
                !isCollectionInProject && addToProjectButton
              }
            </div>
          </div>
          <div className="collection-results-item__body-secondary">
            {
              isCwic && (
                <OverlayTrigger
                  placement="top"
                  overlay={(
                    <Tooltip
                      id="tooltip__quic-badge"
                      className="collection-results-item__badge-tooltip"
                    >
                      Int&apos;l / Interagency Data
                    </Tooltip>
                  )}
                >
                  <Badge
                    className="collection-results-item__badge collection-results-item__badge--cwic"
                  >
                    CWIC
                  </Badge>
                </OverlayTrigger>
              )
            }
            {
              hasMapImagery && (
                <OverlayTrigger
                  placement="top"
                  overlay={(
                    <Tooltip
                      id="tooltip__map-imagery-badge"
                      className="collection-results-item__badge-tooltip"
                    >
                      Supports advanced map visualizations using the GIBS tile service
                    </Tooltip>
                  )}
                >
                  <Badge
                    className="collection-results-item__badge collection-results-item__badge--map-imagery"
                  >
                    Map Imagery
                  </Badge>
                </OverlayTrigger>
              )
            }
            {
              isOpendap && (
                <SplitBadge
                  className="collection-results-item__badge  collection-results-item__badge--customizable"
                  primary="Customizable"
                  secondary={customizeBadges}
                />
              )
            }
            {
              isNrt && (
                <OverlayTrigger
                  placement="top"
                  overlay={(
                    <Tooltip
                      id="tooltip__near-real-time-badge"
                      className="collection-results-item__badge-tooltip"
                    >
                      Near Real Time (NRT) Data
                    </Tooltip>
                  )}
                >
                  <Badge
                    className="collection-results-item__badge collection-results-item__badge--near-real-time"
                  >
                    NRT
                  </Badge>
                </OverlayTrigger>
              )
            }
            {
              (
                collection.short_name
                && collection.version_id
                && displayOrganization
              ) && (
                <Badge
                  className="badge collection-results-item__badge collection-results-item__badge--attribution"
                >
                  {
                    `${collection.short_name} v${collection.version_id} - ${displayOrganization}`
                  }
                </Badge>
              )
            }
          </div>
        </div>
        {
          isLast && (
            <Waypoint
              bottomOffset="-200px"
              onEnter={waypointEnter}
            />
          )
        }
      </div>
    </li>
  )
}

CollectionResultsItem.propTypes = {
  collection: PropTypes.shape({}).isRequired,
  isCollectionInProject: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  onAddProjectCollection: PropTypes.func.isRequired,
  onRemoveCollectionFromProject: PropTypes.func.isRequired,
  onViewCollectionDetails: PropTypes.func.isRequired,
  onViewCollectionGranules: PropTypes.func.isRequired,
  waypointEnter: PropTypes.func.isRequired
}

export default CollectionResultsItem
