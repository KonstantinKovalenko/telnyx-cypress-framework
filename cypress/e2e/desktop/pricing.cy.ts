import Header from "../../pages/header"
import MobileVoicePage from "../../pages/pricing/mobileVoice.page"

describe('TC-06, Verify navigation from pricing information to account registration', () => {

  beforeEach(() => {
    cy.openHomePage()
  })

  it('should show simple transition from price checking to registration', () => {
    Header.getPricingBtn().should('be.visible').click()
    Header.getMobileVoiceFrame().should('be.visible').click()

    MobileVoicePage.getPayAsYouGoLink().should('be.visible').click()
    MobileVoicePage.getCarrierFeeLink().should('be.visible').click()

    MobileVoicePage.getSignUpBtn().should('be.visible').and('not.be.disabled').click()

    cy.url().should('include', 'sign-up')
    cy.contains('h1', 'Create your account').should('be.visible')
  })
})