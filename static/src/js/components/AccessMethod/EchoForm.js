import React, { Component } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'

import '../../../../../node_modules/edsc-echoforms/dist/jquery.echoforms-full.min'
import './EchoForm.scss'

class EchoForm extends Component {
  constructor(props) {
    super(props)

    this.syncModel = this.syncModel.bind(this)
  }

  componentDidMount() {
    const {
      form,
      rawModel,
      methodKey,
      shapefileId
    } = this.props

    // Initialize the timeline plugin
    this.$el = $(this.el)

    this.initializeEchoForm(form, rawModel, methodKey, shapefileId)

    this.$el.on('echoforms:modelchange', this.syncModel)
  }

  componentWillReceiveProps(nextProps) {
    const {
      form,
      methodKey
    } = this.props
    const {
      form: nextForm,
      methodKey: nextMethodKey,
      rawModel: nextRawModel,
      shapefileId
    } = nextProps

    if (form !== nextForm && methodKey !== nextMethodKey) {
      this.$el.echoforms('destroy')

      this.initializeEchoForm(nextForm, nextRawModel, nextMethodKey, shapefileId)
    }
  }

  componentWillUnmount() {
    this.$el.echoforms('destroy')
  }

  /**
   * Updates the EchoForm with the saved rawModel data, initializes the EchoForm plugin
   * and syncs the new EchoForm model to the redux store
   * @param {String} form EchoForm XML data
   * @param {String} rawModel Non-pruned serialized EchoForm data
   * @param {String} methodKey Redux store access method key, to be passed to syncModel to ensure the correct access method is updated in the store
   */
  initializeEchoForm(form, rawModel, methodKey, shapefileId) {
    const echoForm = this.insertModelIntoForm(rawModel, form)

    if (echoForm) this.$el.echoforms({ form: echoForm })

    this.updateFormWithShapefile(shapefileId)

    this.syncModel(methodKey)
  }

  /**
   * Updates the EchoForm XML with the saved rawModel data
   * @param {String} rawModel Non-Pruned serialized EchoForm data
   * @param {String} form EchoForm XML data
   */
  insertModelIntoForm(rawModel, form) {
    if (rawModel) {
      return form.replace(/(?:<instance>)(?:.|\n)*(?:<\/instance>)/, `<instance>\n${rawModel}\n</instance>`)
    }

    return form
  }

  /**
   * Enable/disable the shapefile field in an echoform if a shapefile was uploaded by the user.
   * @param {String} shapefileId Database ID of shapefile
   */
  updateFormWithShapefile(shapefileId) {
    const useShapefile = $('[id*=spatial] :input[id*=use-shapefile-element]')
    const shapefileHelp = useShapefile.closest('.echoforms-elements').siblings('.echoforms-help')
    if (shapefileId) {
      shapefileHelp.html('Complex shapefiles may take longer to process. You will receive an email when your files are finished processing.')
    } else {
      useShapefile.prop('disabled', true).parent().siblings('label').css('color', '#aaa')
      shapefileHelp.html('Click <b>Back to Search Session</b> and upload a KML or Shapefile to enable this option.')
    }
  }


  /**
   * Update the redux store access method with current values from the EchoForm plugin
   * @param {String} key (optional) Redux store access method key. If not provided it will be pulled from current props. This needs to be passed in from componentWillReceiveProps in order to update the new access method
   */
  syncModel(key) {
    let methodKey = key
    const { collectionId, onUpdateAccessMethod } = this.props

    if (typeof methodKey !== 'string') ({ methodKey } = this.props)

    const isValid = this.$el.echoforms('isValid')
    const model = this.$el.echoforms('serialize')
    const rawModel = this.$el.echoforms('serialize', { prune: false })

    onUpdateAccessMethod({
      collectionId,
      method: {
        [methodKey]: {
          isValid,
          model,
          rawModel
        }
      }
    })
  }

  render() {
    return (
      <section className="echoform">
        <div ref={(el) => { this.el = el }} />
      </section>
    )
  }
}

EchoForm.defaultProps = {
  rawModel: null,
  shapefileId: null
}

EchoForm.propTypes = {
  collectionId: PropTypes.string.isRequired,
  form: PropTypes.string.isRequired,
  methodKey: PropTypes.string.isRequired,
  rawModel: PropTypes.string,
  shapefileId: PropTypes.string,
  onUpdateAccessMethod: PropTypes.func.isRequired
}

export default EchoForm
