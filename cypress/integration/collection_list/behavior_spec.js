import { getByTestId } from '../../support/getByTestId'

import singleCollection from './single_collection'

describe('Collection List Behavior', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'POST',
      url: '**/search/collections.json',
      response: singleCollection.body,
      headers: singleCollection.headers
    })

    cy.visit('/')
  })

  it('defaults to the list view and displays results', () => {
    getByTestId('collection-results-list')
      .should('be.visible')

    getByTestId('collection-results-item')
      .should('have.length', 1)
  })

  it('toggles to the table view and displays results', () => {
    // Move the mouse over the dropdown
    cy.get('#root').trigger('mousemove', 850, 100)

    // Click on the "Table" dropdown item
    getByTestId('panel-group-header-dropdown__view__0__menu')
      .find('.radio-setting-dropdown-item')
      .eq(1)
      .click()

    getByTestId('collection-results-table')
      .should('be.visible')

    getByTestId('collection-results-table__item')
      .should('have.length', 1)
  })
})
