import Header from "../../pages/header"

describe('TC-05, UI navigation', () => {

  beforeEach(() => {
    cy.openHomePage()
  })

  it('should verify navigation to the Voice AI product page via the Products menu', () => {
    Header.getProductsBtn().should('be.visible').click()

    Header.getVoiceAIFrame().should('be.visible').and('not.be.disabled').click()

    cy.url().should('include', 'products/voice-ai-agents')

    cy.contains('Voice AI Agents').should('be.visible')
  })
})