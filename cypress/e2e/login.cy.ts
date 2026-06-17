import Header from "../pages/header"

describe('TC-10, Verify access to the login page from the homepage', () => {

  beforeEach(() => {
    cy.openHomePage()
  })

  it('should show "log in" form availability', () => {
    Header.getLogInBtn().should('be.visible').invoke('removeAttr', 'target').click()

    cy.origin('https://portal.telnyx.com', () => {
      cy.contains('label', 'Email').should('be.visible')
    })
  })
})