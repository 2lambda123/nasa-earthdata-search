import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  Accordion,
  Card,
  Form,
  Container,
  Row,
  Table,
  OverlayTrigger,
  Tooltip,
  Col
} from 'react-bootstrap'

import { FaQuestionCircle, FaChevronDown } from 'react-icons/fa'

import {
  swodlrToolTips,
  utmRasterOptions,
  geoRasterOptions
} from '../../constants/swodlrConstants'

import EDSCIcon from '../EDSCIcon/EDSCIcon'
import ProjectPanelSection from '../ProjectPanels/ProjectPanelSection'

import './SwodlrForm.scss'

/**
   * Renders Swodlr Form.
   * @param {Object} props - The props passed into the component.
   * @param {Array} props.granuleList - The list of selected granules for the current collection.
   * @param {String} props.collectionId - The project collection id.
   * @param {Function} props.onUpdateAccessMethod - Function to update metadata for the currently selected access method.
   * @param {String} props.selectedAccessMethod - The currently seletected access method.
   * @param {Function} props.setGranuleList - Function to update the granule list of the parent component.
  */

const SwodlrForm = ({
  granuleList,
  collectionId,
  onUpdateAccessMethod,
  selectedAccessMethod,
  setGranuleList
}) => {
  const [granuleExtent, setGranuleExtent] = useState(false)
  const [sampleGrid, setSampleGrid] = useState('UTM')
  const [rasterResolution, setRasterResolution] = useState(90)

  const handleSwoldrOptions = () => {
    const customParams = {}

    granuleList.forEach((granule) => {
      const { id } = granule
      customParams[id] = {}
      if (sampleGrid === 'UTM') {
        customParams[id].utmZoneAdjust = granule.utmZoneAdjust ? granule.utmZoneAdjust : 0
        customParams[id].mgrsBandAdjust = granule.mgrsBandAdjust ? granule.mgrsBandAdjust : 0
      } else {
        customParams[id].utmZoneAdjust = null
        customParams[id].mgrsBandAdjust = null
      }
    })

    onUpdateAccessMethod({
      collectionId,
      method: {
        [selectedAccessMethod]: {
          swodlrData: {
            params: {
              rasterResolution,
              outputSamplingGridType: sampleGrid,
              outputGranuleExtentFlag: granuleExtent
            },
            custom_params: customParams
          }
        }
      }
    })
  }

  const handleCollectionGranuleListUpdate = (indexVal, property, e) => {
    const granuleListCopy = granuleList

    if (property === 'utm') {
      granuleListCopy[indexVal].utmZoneAdjust = Number(e.target.value)
    }

    if (property === 'mgrs') {
      granuleListCopy[indexVal].mgrsBandAdjust = Number(e.target.value)
    }

    setGranuleList(granuleList)
  }

  const handleRasterResolutionUpdate = (event) => {
    setRasterResolution(Number(event.target.value))
  }

  const handleSampleGrid = (type) => {
    setSampleGrid(type)
    let defaultRasterValue
    if (type === 'GEO') {
      defaultRasterValue = 3
    } else {
      defaultRasterValue = 90
    }

    setRasterResolution(defaultRasterValue)
  }

  const handleGranuleExtent = (value) => {
    setGranuleExtent(value)
  }

  useEffect(() => {
    handleSwoldrOptions()
  }, [granuleExtent, granuleList, rasterResolution, sampleGrid])

  return (
    <ProjectPanelSection
      customHeadingTag="h4"
      nested
    >
      <Container fluid>
        <Row>
          <Col>
            Granule Extent
            <OverlayTrigger
              placement="top"
              overlay={
                (
                  <Tooltip style={{ width: '20rem' }}>
                    {swodlrToolTips.GranuleExtent}
                  </Tooltip>
                )
              }
            >
              <EDSCIcon icon={FaQuestionCircle} size="16px" variant="details-span" />
            </OverlayTrigger>

          </Col>
          <Col>
            <Form>
              <div className="mb-3">
                <Form.Check
                  inline
                  label="128 x 128 km"
                  name="granuleExtent"
                  type="radio"
                  id="granule-extent-128-by-128"
                  checked={!granuleExtent}
                  onChange={
                    () => {
                      handleGranuleExtent(false)
                    }

                  }
                />
                <Form.Check
                  inline
                  label="256 x 128 km"
                  name="granuleExtent"
                  type="radio"
                  id="granule-extent-256-by-128"
                  checked={granuleExtent}
                  onChange={
                    () => {
                      handleGranuleExtent(true)
                    }
                  }
                />
              </div>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            Sampling Grid Type
            <OverlayTrigger
              placement="top"
              overlay={
                (
                  <Tooltip style={{ width: '20rem' }}>
                    {swodlrToolTips.SamplingGridResolution}
                  </Tooltip>
                )
              }
            >
              <EDSCIcon icon={FaQuestionCircle} size="16px" variant="details-span" />
            </OverlayTrigger>
          </Col>
          <Col>
            <Form>
              <div className="mb-3">
                <Form.Check
                  inline
                  label="UTM"
                  name="sample-grid"
                  type="radio"
                  id="sample-grid-utm"
                  checked={sampleGrid === 'UTM'}
                  onChange={
                    () => {
                      handleSampleGrid('UTM')
                    }
                  }
                />
                <Form.Check
                  inline
                  label="LAT/LON"
                  name="sample-grid"
                  type="radio"
                  id="sample-grid-lat-lon"
                  checked={sampleGrid === 'GEO'}
                  onChange={
                    () => {
                      handleSampleGrid('GEO')
                    }
                  }
                />
              </div>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            Raster Resolution
            <OverlayTrigger
              placement="top"
              overlay={
                (
                  <Tooltip style={{ width: '20rem' }}>
                    {swodlrToolTips.RasterResolution}
                  </Tooltip>
                )
              }
            >
              <EDSCIcon icon={FaQuestionCircle} size="16px" variant="details-span" />
            </OverlayTrigger>
          </Col>
          <Col>
            <Form>
              <Form.Control
                as="select"
                onChange={
                  (e) => {
                    handleRasterResolutionUpdate(e)
                  }
                }
                data-testid="rasterResolutionSelection"
                value={rasterResolution}
              >
                {
                  sampleGrid === 'GEO'
                    ? geoRasterOptions.map((option) => (
                      <option value={option.value} key={option.value} data-testid={`geo-raster-selection-${option.value}`}>
                        {option.title}
                      </option>
                    ))
                    : utmRasterOptions.map((option) => (
                      <option value={option.value} key={option.value} data-testid={`utm-raster-selection-${option.value}`}>
                        {option.title}
                      </option>
                    ))
                }
              </Form.Control>
            </Form>

          </Col>
        </Row>
        <br />
        <Row hidden={sampleGrid !== 'UTM'}>
          <Col>
            <Accordion>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  <div data-testid="advancedOptionsToggle" className="swodlr-advanced-options-container">
                    <div className="swodlr-advanced-options-item">
                      Advanced options
                    </div>
                    <EDSCIcon icon={FaChevronDown} className="swodlr-advanced-options-icon" />
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Table striped bordered size="sm" responsive>
                      <thead>
                        <tr>
                          <th>Granule</th>
                          <th>
                            UTM Zone Adjust
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                (
                                  <Tooltip style={{ width: '20rem' }}>
                                    {swodlrToolTips.UTM}
                                  </Tooltip>
                                )
                              }
                            >
                              <EDSCIcon icon={FaQuestionCircle} size="16px" variant="details-span" />
                            </OverlayTrigger>
                          </th>
                          <th>
                            MGRS Band Adjust
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                (
                                  <Tooltip style={{ width: '20rem' }}>
                                    {swodlrToolTips.MGRS}
                                  </Tooltip>
                                )
                              }
                            >
                              <EDSCIcon icon={FaQuestionCircle} size="16px" variant="details-span" />
                            </OverlayTrigger>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          granuleList && granuleList.map((granule, i) => (
                            <tr key={granule.id}>
                              <td>{granule.id}</td>
                              <td className="nowrap">
                                <Form.Check
                                  inline
                                  label="+1"
                                  name={`${granule.id}-UTM-zone`}
                                  type="radio"
                                  data-testid={`${granule.id}-plus-1-UTM-zone`}
                                  value={1}
                                  onChange={
                                    (e) => {
                                      handleCollectionGranuleListUpdate(i, 'utm', e)
                                    }
                                  }
                                />
                                <Form.Check
                                  inline
                                  label="0"
                                  name={`${granule.id}-UTM-zone`}
                                  type="radio"
                                  data-testid={`${granule.id}-0-UTM-zone`}
                                  value={0}
                                  defaultChecked
                                  onChange={
                                    (e) => {
                                      handleCollectionGranuleListUpdate(i, 'utm', e)
                                    }
                                  }
                                />
                                <Form.Check
                                  inline
                                  label="-1"
                                  name={`${granule.id}-UTM-zone`}
                                  type="radio"
                                  data-testid={`${granule.id}-minus-1-UTM-zone`}
                                  value={-1}
                                  onChange={
                                    (e) => {
                                      handleCollectionGranuleListUpdate(i, 'utm', e)
                                    }
                                  }
                                />
                              </td>
                              <td className="nowrap">
                                <Form.Check
                                  inline
                                  label="+1"
                                  name={`${granule.id}-MGRS-band`}
                                  type="radio"
                                  data-testid={`${granule.id}-plus-1-MGRS-band`}
                                  value={1}
                                  onChange={
                                    (e) => {
                                      handleCollectionGranuleListUpdate(i, 'mgrs', e)
                                    }
                                  }
                                />
                                <Form.Check
                                  inline
                                  label="0"
                                  name={`${granule.id}-MGRS-band`}
                                  type="radio"
                                  data-testid={`${granule.id}-0-MGRS-band`}
                                  value={0}
                                  defaultChecked
                                  onChange={
                                    (e) => {
                                      handleCollectionGranuleListUpdate(i, 'mgrs', e)
                                    }
                                  }
                                />
                                <Form.Check
                                  inline
                                  label="-1"
                                  name={`${granule.id}-MGRS-band`}
                                  type="radio"
                                  data-testid={`${granule.id}-minus-1-MGRS-band`}
                                  value={-1}
                                  onChange={
                                    (e) => {
                                      handleCollectionGranuleListUpdate(i, 'mgrs', e)
                                    }
                                  }
                                />
                              </td>
                            </tr>
                          ))

                        }
                      </tbody>
                    </Table>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </ProjectPanelSection>
  )
}

SwodlrForm.propTypes = {
  onUpdateAccessMethod: PropTypes.func.isRequired,
  selectedAccessMethod: PropTypes.string.isRequired,
  setGranuleList: PropTypes.func.isRequired,
  collectionId: PropTypes.string.isRequired,
  granuleList: PropTypes.arrayOf(PropTypes.shape({
    utmZoneAdjust: PropTypes.number,
    mgrsBandAdjust: PropTypes.number
  })).isRequired
}

export default SwodlrForm