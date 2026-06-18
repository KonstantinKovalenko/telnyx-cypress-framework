import Footer from "../../pages/footer"

describe('TC-07, Verify footer links are functional and displayed across multiple pages', () => {

  beforeEach(() => {
    cy.openHomePage()
  })

  it('should show footer consistency and workability', () => {
    cy.scrollToFooter()

    Footer.getCompanyBlock().should('be.visible')
    Footer.getOurNetworkLink().should('be.visible').and('not.be.disabled').click()

    cy.contains('h1', 'global network').should('be.visible')
    cy.scrollToFooter()

    Footer.getSocialBlock().should('be.visible')
    Footer.getPrivacyPolicyLink().should('be.visible').and('not.be.disabled').click()

    cy.contains('h1', 'Privacy Policy').should('be.visible')
    cy.scrollToFooter()
  })
})