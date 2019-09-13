/* eslint-disable no-underscore-dangle */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { startCase } from 'lodash'

import { FeatureGroup } from 'react-leaflet'
import { EditControl } from 'react-leaflet-draw'
import L from 'leaflet'

import 'leaflet-draw/dist/leaflet.draw.css'
import icon from 'leaflet-draw/dist/images/marker-icon.png'
import iconShadow from 'leaflet-draw/dist/images/marker-shadow.png'

import { eventEmitter } from '../../events/events'
import { makeCounterClockwise, getShape, splitListOfPoints } from '../../util/map/geo'

const normalColor = '#00ffff'
const errorColor = '#990000'
export const colorOptions = {
  color: normalColor,
  dashArray: null,
  pointerEvents: 'stroke',
  fillOpacity: 0
}
export const errorOptions = {
  color: errorColor,
  dashArray: null
}

// Fix the leaflet Marker icons
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: icon,
  iconUrl: icon,
  shadowUrl: iconShadow
})

// Add some custom text to leaflet draw things
L.drawLocal.draw.handlers.simpleshape.tooltip.end = 'Release to finish drawing'
L.drawLocal.draw.toolbar.buttons.polygon = 'Search by spatial polygon'
L.drawLocal.draw.toolbar.buttons.rectangle = 'Search by spatial rectangle'
L.drawLocal.draw.toolbar.buttons.marker = 'Search by spatial coordinate'

// Append coordinate information to tooltips
const originalUpdateContent = L.Draw.Tooltip.prototype.updateContent

L.Draw.Tooltip.prototype.updateContent = function updateContent(content) {
  let newContent = content
  this._content = content
  if (this._point) {
    newContent = {
      text: `${content.text}<br>${this._point}`,
      subtext: content.subtext
    }
  }
  return originalUpdateContent.call(this, newContent)
}

const originalUpdatePosition = L.Draw.Tooltip.prototype.updatePosition

L.Draw.Tooltip.prototype.updatePosition = function updatePosition(latlng) {
  this._point = `(${latlng.lat.toFixed(5)}, ${latlng.lng.toFixed(5)})`
  if (this._content != null) {
    this.updateContent(this._content)
  }

  return originalUpdatePosition.call(this, latlng)
}

class SpatialSelection extends Component {
  constructor(props) {
    super(props)

    this.state = {
      drawnLayer: null,
      drawnLayerType: null,
      drawnPoints: null
    }

    this.onCreated = this.onCreated.bind(this)
    this.onDrawStart = this.onDrawStart.bind(this)
    this.onDrawStop = this.onDrawStop.bind(this)
    this.onEdited = this.onEdited.bind(this)
    this.onDeleted = this.onDeleted.bind(this)
    this.onEditStart = this.onEditStart.bind(this)
    this.onEditStop = this.onEditStop.bind(this)
    this.updateStateAndQuery = this.updateStateAndQuery.bind(this)
  }

  componentDidMount() {
    const { mapRef } = this.props
    const map = mapRef.leafletElement
    if (!map) {
      return
    }

    this.renderShape(this.props)
  }

  componentWillReceiveProps(nextProps) {
    const { mapRef } = this.props
    const { drawnPoints, drawnLayer } = this.state

    const map = mapRef.leafletElement
    if (!map) {
      return
    }

    const newDrawing = nextProps.pointSearch
      || nextProps.boundingBoxSearch
      || nextProps.polygonSearch

    if ((drawnLayer && drawnLayer._map === null) || newDrawing !== drawnPoints) {
      // If the new drawing is different than the current drawing,
      // remove the current drawing
      if (drawnLayer) {
        drawnLayer.remove()
      }

      // Draw the new shape
      this.renderShape(nextProps)
    }
  }

  // Callback from EditControl, called when clicking the draw shape button
  onDrawStart(e) {
    const { drawnLayer } = this.state

    if (drawnLayer) {
      const { featureGroupRef } = this
      const { leafletElement } = featureGroupRef
      leafletElement.removeLayer(drawnLayer)

      this.setState({
        drawnLayer: null,
        drawnLayerType: null
      })
    }

    let { layerType } = e
    const { onToggleDrawingNewLayer, onMetricsMap } = this.props

    if (layerType === 'shapefile') layerType = 'Shape File'

    onMetricsMap(`Spatial: ${startCase(layerType)}`)
    onToggleDrawingNewLayer(layerType)
  }

  // Callback from EditControl, called when the drawing is stopped from
  // cancelling or completing
  onDrawStop() {
    const { onToggleDrawingNewLayer } = this.props
    onToggleDrawingNewLayer(false)
  }

  // Callback from EditControl, called when the controls are mounted
  onMounted(drawControl) {
    eventEmitter.on('map.drawStart', (e) => {
      const { type } = e
      drawControl._toolbars.draw._modes[type].handler.enable()
    })
  }

  onEditStart() {
    this.preEditBounds = this.boundsToPoints(this.layer)
  }

  onEditStop() {
    const { type: layerType } = this.layer
    const { onMetricsSpatialEdit } = this.props
    const postEditBounds = this.boundsToPoints(this.layer)

    let distanceSum = 0

    this.preEditBounds.forEach((p0, i) => {
      const p1 = postEditBounds[i]
      distanceSum += p0.distanceTo(p1)
    })

    onMetricsSpatialEdit({
      type: layerType,
      distanceSum
    })
  }

  // Callback from EditControl, called when the layer is edited
  onEdited() {
    const { drawnLayer, drawnLayerType } = this.state
    this.updateStateAndQuery(drawnLayer, drawnLayerType)
  }

  // Callback from EditControl, contains the layer that was just drawn
  onCreated(e) {
    const { layer, layerType } = e

    let type
    if (layerType === 'marker') {
      type = 'point'
    } else if (layerType === 'rectangle') {
      type = 'boundingBox'
    } else {
      type = layerType
    }

    this.updateStateAndQuery(layer, type)
  }

  // Callback from EditControl, called when the layer is deleted
  onDeleted() {
    const { onChangeQuery } = this.props
    onChangeQuery({
      collection: {
        spatial: {}
      }
    })
  }

  setLayer(layer) {
    this.layer = layer
  }

  // Determine the latLngs from the layer and type, then update the component state and the query
  updateStateAndQuery(layer, type) {
    const { onChangeQuery } = this.props

    let originalLatLngs
    let latLngs
    switch (type) {
      case 'point':
        latLngs = [layer.getLatLng()].map(p => `${p.lng},${p.lat}`)
        break
      case 'boundingBox':
        latLngs = [layer.getLatLngs()[0][0], layer.getLatLngs()[0][2]].map(p => `${p.lng},${p.lat}`)
        break
      case 'polygon':
        originalLatLngs = Array.from(layer.getLatLngs())
        latLngs = makeCounterClockwise(originalLatLngs).map(p => `${p.lng},${p.lat}`)
        // Close the polygon by duplicating the first point as the last point
        latLngs.push(latLngs[0])
        break
      default:
        return
    }

    this.setState({
      drawnLayer: layer,
      drawnLayerType: type,
      drawnPoints: latLngs.join()
    })
    onChangeQuery({
      collection: {
        spatial: {
          [type]: latLngs.join()
        }
      }
    })
  }

  boundsToPoints(layer) {
    const { mapRef } = this.props
    const map = mapRef.leafletElement
    let bounds = []

    if (layer.type === 'marker') {
      bounds = [layer.getLatLng()]
    } else {
      bounds = layer.getLatLngs()
    }

    return bounds.map(latLng => map.latLngToLayerPoint(latLng))
  }

  // Draws a leaflet shape based on provided props
  renderShape(props) {
    const { featureGroupRef = {} } = this
    if (featureGroupRef === null) return
    const { leafletElement: featureGroup = null } = featureGroupRef

    const {
      pointSearch,
      boundingBoxSearch,
      polygonSearch
    } = props

    if (pointSearch) {
      this.setState({ drawnPoints: pointSearch })
      this.renderPoint(getShape([pointSearch]), featureGroup)
    } else if (boundingBoxSearch) {
      this.setState({ drawnPoints: boundingBoxSearch })
      const points = splitListOfPoints(boundingBoxSearch)
      this.renderBoundingBox(getShape(points), featureGroup)
    } else if (polygonSearch) {
      this.setState({ drawnPoints: polygonSearch })
      const points = splitListOfPoints(polygonSearch)
      this.renderPolygon(getShape(points), featureGroup)
    }
  }

  // Draws a leaflet Marker
  renderPoint(point, featureGroup) {
    if (featureGroup) {
      const marker = new L.Marker(point[0], {
        icon: L.Draw.Marker.prototype.options.icon
      })

      marker.type = 'marker'
      marker.addTo(featureGroup)

      this.setState({
        drawnLayer: marker,
        drawnLayerType: 'point'
      })
      this.setLayer(marker)
    }
  }

  // Draws a leaflet Rectangle
  renderBoundingBox(rectangle, featureGroup) {
    if (featureGroup) {
      const shape = rectangle
      // southwest longitude should not be greater than northeast
      if (shape[0].lng > shape[1].lng) {
        shape[1].lng += 360
      }

      const bounds = new L.LatLngBounds(...Array.from(shape || []))
      const options = L.extend(
        {},
        L.Draw.Rectangle.prototype.options.shapeOptions,
        colorOptions
      )
      const rect = new L.Rectangle(bounds, options)

      rect.type = 'rectangle'
      rect.addTo(featureGroup)

      this.setState({
        drawnLayer: rect,
        drawnLayerType: 'boundingBox'
      })
      this.setLayer(rect)
    }
  }

  // Draws a leaflet Polygon
  renderPolygon(polygon, featureGroup) {
    if (featureGroup) {
      const options = L.extend(
        {},
        L.Draw.Polygon.prototype.options.shapeOptions,
        colorOptions
      )
      const poly = new L.SphericalPolygon(polygon, options)

      poly.type = 'polygon'
      poly.addTo(featureGroup)

      this.setState({
        drawnLayer: poly,
        drawnLayerType: 'polygon'
      })
      this.setLayer(poly)
    }
  }

  render() {
    const { isProjectPage } = this.props

    const controls = (
      <EditControl
        position="bottomright"
        onDrawStart={this.onDrawStart}
        onDrawStop={this.onDrawStop}
        onCreated={this.onCreated}
        onMounted={this.onMounted}
        onEdited={this.onEdited}
        onEditStart={this.onEditStart}
        onEditStop={this.onEditStop}
        draw={{
          polygon: {
            drawError: errorOptions,
            shapeOptions: colorOptions
          },
          rectangle: {
            drawError: errorOptions,
            shapeOptions: colorOptions
          },
          polyline: false,
          circlemarker: false,
          circle: false
        }}
        edit={{
          selectedPathOptions: {
            opacity: 0.6,
            dashArray: '10, 10'
          }
        }}
      />
    )
    return (
      <FeatureGroup ref={(ref) => { this.featureGroupRef = ref }}>
        { !isProjectPage && controls }
      </FeatureGroup>
    )
  }
}

SpatialSelection.defaultProps = {
  boundingBoxSearch: '',
  mapRef: {},
  pointSearch: '',
  polygonSearch: ''
}

SpatialSelection.propTypes = {
  boundingBoxSearch: PropTypes.string,
  isProjectPage: PropTypes.bool.isRequired,
  mapRef: PropTypes.shape({}),
  onChangeQuery: PropTypes.func.isRequired,
  pointSearch: PropTypes.string,
  polygonSearch: PropTypes.string,
  onToggleDrawingNewLayer: PropTypes.func.isRequired,
  onMetricsMap: PropTypes.func.isRequired,
  onMetricsSpatialEdit: PropTypes.func.isRequired
}

export default SpatialSelection
