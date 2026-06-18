import HomePage from "../pages/home.page"

describe('TC-01 Verify homepage loads successfully and key elements are displayed', () => {

  it('should open homepage and navigate to Full Stack section', () => {
    const pageTitle = "Telnyx—Voice AI Agents with Built-In Global Telco Infrastructure"

    HomePage.open()

    cy.title().should('eq', pageTitle)

    HomePage.getMainHeadline().should('be.visible')

    HomePage.getExploreStackButton().should('be.visible').and('not.be.disabled').click()

    HomePage.getFullStackSection().should('be.visible')
  })
})