import Header from "../pages/header";
import MobileVoicePage from "../pages/pricing/mobileVoice.page";
import SignUpPage from "../pages/signUp.page";

describe('TC-06, Verify navigation from pricing information to account registration', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('should show simple transition from price checking to registration', () => {
    Header.getPricingBtn().click()
    Header.getMobileVoiceFrame().click()

    MobileVoicePage.getPayAsYouGoLink().click()
    MobileVoicePage.getCarrierFeeLink().click()

    MobileVoicePage.getSignUpBtn().should('be.visible').and('not.be.disabled').click()

    cy.url().should('include', 'sign-up')
    SignUpPage.getHeader().should('be.visible')
  });
});