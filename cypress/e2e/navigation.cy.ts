import Header from "../pages/header";
import HomePage from "../pages/home.page";
import VoiceAIPage from "../pages/products/voiceAI.page";
import HealthCarePage from "../pages/solutions/healthCare.page";

describe('TC-05, Ui navigation', () => {

  it('should verify navigation to the Voice AI product page via the Products menu', () => {
    cy.viewport(1920, 1080)
    cy.visit('/')

    Header.getProductsBtn().should('be.visible').and('not.be.disabled').click()

    Header.getVoiceAiFrame().should('be.visible').and('not.be.disabled').click()

    cy.url().should('include', 'products/voice-ai-agents')

    VoiceAIPage.getHeadline().should('be.visible')
  })
})

describe('TC-08, mobile UI navigation', () => {

  it('should verify homepage layout navigation accessibility in mobile view', () => {
    cy.viewport('iphone-x')
    cy.visit('/')
    
    HomePage.getMainHeadline().should('be.visible')

    Header.getHamburgerBtn().should('be.visible').click()
    Header.getMainMenu().should('be.visible')

    Header.getSolutionsBtn().should('be.visible').click()
    Header.getHealthcareFrame().should('be.visible').click()

    HealthCarePage.getHeader().should('be.visible')
  })
})