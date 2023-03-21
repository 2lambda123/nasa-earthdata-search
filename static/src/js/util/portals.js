/* eslint-disable import/no-dynamic-require, global-require */

import { cloneDeep, merge } from 'lodash'

import { getApplicationConfig } from '../../../../sharedUtils/config'

/**
 * Does the given portalId match the application defaultPortal
 * @param {String} portalId
 */
export const isDefaultPortal = (portalId) => {
  const defaultPortalId = getApplicationConfig().defaultPortal
  return portalId === defaultPortalId
}

/**
 * Recursively build the portal config merging the config into the configs parent config
 * @param {Object} json Portal config
 */
export const buildConfig = (json, availablePortals) => {
  const { parentConfig } = json

  // If the current config has a parent, merge the current config into the result of the parents being merged together
  if (parentConfig) {
    const { [parentConfig]: parentJson } = availablePortals
    // const parentJson = require(`../../../../portals/${parentConfig}/config.json`)
    const parent = buildConfig({ ...parentJson }, availablePortals)
    const merged = merge({ ...parent }, { ...json })
    return cloneDeep({ ...merged })
  }

  // If the config doesn't have a parent, merge the current config into the default portal config
  const { default: defaultJson } = availablePortals
  const merged = merge({ ...defaultJson }, { ...json })
  // TODO: This helped for some reason but, I can't yet explain why
  return cloneDeep({ ...merged })
}

/**
 * Recursively build the portal config merging the config into the configs parent config
 * @param {Object} json Portal config
 */
const buildIntialPortalConfig = (json) => {
  const { parentConfig } = json

  // If the current config has a parent, merge the current config into the result of the parents being merged together
  if (parentConfig) {
    const parentJson = require(`../../../../portals/${parentConfig}/config.json`)
    const parent = buildIntialPortalConfig(parentJson)
    const merged = merge(parent, json)
    return cloneDeep(merged)
  }

  // If the config doesn't have a parent, merge the current config into the default portal config
  const defaultJson = require('../../../../portals/default/config.json')
  return merge(defaultJson, json)
}

/**
 * Returns the portal config json
 * @param {String} portalId
 */

export const getPortalConfig = (portalId) => {
  const portalJson = require(`../../../../portals/${portalId}/config.json`)
  // TODO override this to use the large portal config
  return buildIntialPortalConfig(portalJson)
}
