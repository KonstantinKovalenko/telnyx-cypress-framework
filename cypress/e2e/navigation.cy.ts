import Header from "../pages/header";
import VoiceAIPage from "../pages/products/voiceAI.page";

describe('TC-05, TC-08, UX navigation', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('should verify navigation to the Voice AI product page via the Products menu', () => {
    Header.getProductsBtn().should('be.visible').and('not.be.disabled').click()

    Header.getVoiceAiFrame().should('be.visible').and('not.be.disabled').click()

    cy.url().should('include', 'products/voice-ai-agents')

    VoiceAIPage.getHeadline().should('be.visible')
  });
});


//TC-08 (mobile navigation)