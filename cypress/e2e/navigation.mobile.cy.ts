import Header from "../pages/header"
import HomePage from "../pages/home.page"

describe('TC-08, mobile UI navigation', () => {

  it('should verify homepage layout navigation accessibility in mobile view', () => {
    cy.openHomePage()
    
    HomePage.getMainHeadline().should('be.visible')

    Header.getHamburgerBtn().should('be.visible').click()
    Header.getMainMenu().should('be.visible')

    Header.getSolutionsBtn().should('be.visible').click()
    Header.getHealthCareFrame().should('be.visible').click()

    cy.contains('h1', 'healthcare').should('be.visible')
  })
})