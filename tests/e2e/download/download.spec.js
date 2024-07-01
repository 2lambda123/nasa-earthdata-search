import { test, expect } from 'playwright-test-coverage'

import collectionsGraphJson from './__mocks__/collections_graph.json'
import timeline from './__mocks__/timeline.json'
import granules from './__mocks__/granules.json'
import retrievals from './__mocks__/retrievals.json'
import retrieval from './__mocks__/retrieval.json'

import { login } from '../../support/login'
import { getAuthHeaders } from '../../support/getAuthHeaders'

test.describe('Download spec', () => {
  // Test.beforeEach(async ({ page }, testInfo) => {
  //   await page.route('**/*.{png,jpg,jpeg}', (route) => route.abort())

  //   // eslint-disable-next-line no-param-reassign
  //   // testInfo.snapshotPath = (name) => `${testInfo.file}-snapshots/${name}`
  // })

  test('get to the download page', async ({ page, context }) => {
    login(context)

    const authHeaders = getAuthHeaders()

    await page.route(/graphql/, async (route) => {
      await route.fulfill({
        json: collectionsGraphJson.body,
        headers: authHeaders
      })
    })

    await page.route(/timeline/, async (route) => {
      await route.fulfill({
        json: timeline.body,
        headers: authHeaders
      })
    })

    await page.route(/dqs/, async (route) => {
      await route.fulfill({
        json: []
      })
    })

    await page.route(/granules$/, async (route) => {
      await route.fulfill({
        json: granules.body,
        headers: {
          ...authHeaders,
          'cmr-hits': '42'
        }
      })
    })

    await page.route(/saved_access_configs/, async (route) => {
      await route.fulfill({
        json: {}
      })
    })

    // Await page.route(/providers/, async (route) => {
    //   await route.fulfill({
    //     json: providers.body
    //   })
    // })

    // await page.route(/access_methods/, async (route) => {
    //   await route.fulfill({
    //     json: accessMethods.body
    //   })
    // })

    await page.goto('/projects?p=!C1443528505-LAADS&sb=-77.15071678161621%2C38.78817179999825%2C-76.89801406860352%2C38.99784152603538&lat=37.64643450971326&long=-77.407470703125&zoom=7&qt=2020-01-06T04%3A15%3A27.310Z%2C2020-01-13T07%3A32%3A50.962Z&ff=Map%20Imagery&tl=1563377338!4!!')

    // Await page.getByTestId('C1443528505-LAADS_access-method__direct-download').click()

    // // Click the back to search button
    // await page.getByTestId('back-to-search-button').click()

    await page.waitForSelector('[data-testid="collection-result-item_C1443528505-LAADS"]')

    // // Confirm the leaflet tools are in the correct location
    // await expect(page).toHaveScreenshot('search-screenshot.png', {
    //   clip: {
    //     x: 1200,
    //     y: 700,
    //     width: 200,
    //     height: 200
    //   }
    // })

    // // Click a collection that exists in the project
    // await page.getByTestId('collection-result-item_C1443528505-LAADS').click()

    // // Confirm the leaflet tools are in the correct location
    // await expect(page).toHaveScreenshot('granules-screenshot.png', {
    //   clip: {
    //     x: 1200,
    //     y: 700,
    //     width: 200,
    //     height: 200
    //   }
    // })
  })
})
