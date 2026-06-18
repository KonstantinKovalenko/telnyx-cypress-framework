import Header from "../../pages/header"

describe('TC-09, Verify Support Center content availability and collection navigation', () => {

  beforeEach(() => {
    cy.openHomePage()
  })

  it('should show support center workability', () => {
    Header.getResourcesBtn().should('be.visible').and('not.be.disabled').click()
    Header.getSupportCenterFrame().should('be.visible').invoke('removeAttr', 'target').click()

    cy.origin('https://support.telnyx.com', () => {
      cy.get('#search-bar').should('be.visible')

      cy.get('a[data-testid="collection-card-classic"]')
        .first()
        .as('card')

      cy.get('@card')
        .find('[data-testid="collection-name"]')
        .invoke('text')
        .then(title => {
          cy.get('@card').click()

          cy.contains('h1', title.trim()).should('be.visible')
        })
    })
  })
})