import React, {} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import actions from '../../actions'

import { eventEmitter } from '../../events/events'
import ShapefileDropzone from '../../components/Dropzone/ShapefileDropzone'

const mapDispatchToProps = dispatch => ({
  onShapefileErrored: options => dispatch(actions.shapefileErrored(options)),
  onSaveShapefile: options => dispatch(actions.saveShapefile(options)),
  onUpdateShapefile: options => dispatch(actions.updateShapefile(options)),
  onToggleShapefileUploadModal: state => dispatch(actions.toggleShapefileUploadModal(state))
})

const mapStateToProps = state => ({
  authToken: state.authToken
})

const dropzoneOptions = {
  // Official Ogre web service
  // We likely want to use this, once they fix OPTIONS requests
  // See: https://github.com/wavded/ogre/pull/22
  url: 'http://ogre.adc4gis.com/convert',
  headers: {
    'Cache-Control': undefined
  },
  paramName: 'upload',
  createImageThumbnails: false,
  acceptedFiles: '.zip,.kml,.kmz,.json,.geojson,.rss,.georss,.xml',
  // fallback() { // TODO: Implement a fallback for unsupported browser. May not be an issue with our browser support.
  //   onToggleShapefileUploadModal(true)
  // },
  parallelUploads: 1,
  uploadMultiple: false,
  previewTemplate: '<div>' // remove the dropzone preview
}

export const ShapefileDropzoneContainer = ({
  authToken,
  onShapefileErrored,
  onSaveShapefile,
  onToggleShapefileUploadModal
}) => (
  <ShapefileDropzone
    dropzoneOptions={dropzoneOptions}
    eventScope="shapefile"
    onSuccess={(file, resp, dropzoneEl) => {
      const { name, size } = file
      const fileSize = dropzoneEl.filesize(size).replace(/<{1}[^<>]{1,}>{1}/g, '')

      dropzoneEl.removeFile(file)

      eventEmitter.emit('shapefile.success', file, resp)

      onToggleShapefileUploadModal(false)

      onSaveShapefile({
        auth_token: authToken,
        file: resp,
        filename: name,
        size: fileSize
      })
    }}
    onError={(file) => {
      onToggleShapefileUploadModal(false)

      if (file.name.match('.*shp')) {
        onShapefileErrored({
          type: 'upload_esri'
        })
      }
    }}
    onRemovedFile={(file, resp) => {
      eventEmitter.emit('shapefile.removedfile', file, resp)
    }}
  />
)

ShapefileDropzoneContainer.propTypes = {
  authToken: PropTypes.string.isRequired,
  onShapefileErrored: PropTypes.func.isRequired,
  onSaveShapefile: PropTypes.func.isRequired,
  onToggleShapefileUploadModal: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ShapefileDropzoneContainer)
