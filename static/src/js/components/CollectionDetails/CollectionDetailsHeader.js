import React from 'react'
import PropTypes from 'prop-types'
import { Badge } from 'react-bootstrap'

import Skeleton from '../Skeleton/Skeleton'
import { MoreActionsDropdown } from '../MoreActionsDropdown/MoreActionsDropdown'

import { collectionTitleSkeleton } from './skeleton'
import generateHandoffs from '../../util/handoffs/generateHandoffs'

import './CollectionDetailsHeader.scss'
import PortalLinkContainer from '../../containers/PortalLinkContainer/PortalLinkContainer'

/**
 * Renders CollectionDetailsHeader.
 * @param {object} props - The props passed into the component.
 * @param {object} props.focusedCollectionMetadata - Focused collection passed from redux store.
 */
export const CollectionDetailsHeader = ({
  collectionSearch,
  focusedCollectionMetadata,
  location
}) => {
  const {
    short_name: shortName,
    title,
    version_id: versionId
  } = focusedCollectionMetadata

  const handoffLinks = generateHandoffs(focusedCollectionMetadata, collectionSearch)

  return (
    <div className="collection-details-header">
      <div className="row">
        <div className="col align-self-start">
          <div className="collection-details-header__title-wrap">
            {
              !title && (
                <Skeleton
                  className="order-status__item-skeleton"
                  containerStyle={{ display: 'inline-block', height: '1.375rem', width: '100%' }}
                  shapes={collectionTitleSkeleton}
                />
              )
            }
            {
              title && (
                <>
                  <h2 className="collection-details-header__title">{title}</h2>
                  <Badge className="collection-details-header__short-name" variant="light">{shortName}</Badge>
                  <Badge className="collection-details-header__version-id" variant="info">{`Version ${versionId}`}</Badge>
                  <PortalLinkContainer
                    className="granule-results-header__title-link"
                    to={{
                      pathname: '/search/granules',
                      search: location.search
                    }}
                  >
                    {' View Granules'}
                  </PortalLinkContainer>
                </>
              )
            }
          </div>
        </div>
        <MoreActionsDropdown className="col-auto align-self-end" handoffLinks={handoffLinks} />
      </div>
    </div>
  )
}

CollectionDetailsHeader.defaultProps = {
  focusedCollectionMetadata: {}
}

CollectionDetailsHeader.propTypes = {
  collectionSearch: PropTypes.shape({}).isRequired,
  focusedCollectionMetadata: PropTypes.shape({}),
  location: PropTypes.shape({}).isRequired
}

export default CollectionDetailsHeader
