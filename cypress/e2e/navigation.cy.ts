import Header from "../pages/header"
import HomePage from "../pages/home.page"

describe('TC-05, UI navigation', () => {

  it('should verify navigation to the Voice AI product page via the Products menu', () => {
    cy.viewport(1920, 1080)
    cy.openHomePage()

    Header.getProductsBtn().should('be.visible').and('not.be.disabled').click()

    Header.getVoiceAIFrame().should('be.visible').and('not.be.disabled').click()

    cy.url().should('include', 'products/voice-ai-agents')

    cy.contains('Voice AI Agents').should('be.visible')
  })
})

describe('TC-08, mobile UI navigation', () => {

  it('should verify homepage layout navigation accessibility in mobile view', () => {
    cy.viewport('iphone-x')
    cy.openHomePage()
    
    HomePage.getMainHeadline().should('be.visible')

    Header.getHamburgerBtn().should('be.visible').click()
    Header.getMainMenu().should('be.visible')

    Header.getSolutionsBtn().should('be.visible').click()
    Header.getHealthCareFrame().should('be.visible').click()

    cy.contains('h1', 'healthcare').should('be.visible')
  })
})