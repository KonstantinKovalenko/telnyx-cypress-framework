import Footer from "../pages/footer";
import OurNetworkPage from "../pages/company/ourNetwork.page";
import PrivacyPolicyPage from "../pages/legal/privacyPolicy.page"; 

describe('TC-07, Verify footer links are functional and displayed across multiple pages', () => {

  beforeEach(() => {
    cy.openHomePage()
  })

  it('should show footer consistency and workability', () => {
    cy.scrollToFooter()

    Footer.getCompanyBlock().should('be.visible')
    Footer.getOurNetworkLink().should('be.visible').and('not.be.disabled').click()

    OurNetworkPage.getHeader().should('be.visible')
    cy.scrollToFooter()

    Footer.getSocialBlock().should('be.visible')
    Footer.getPrivacyPolicyLink().should('be.visible').and('not.be.disabled').click()

    PrivacyPolicyPage.getHeader().should('be.visible')
    cy.scrollToFooter()
  })
})