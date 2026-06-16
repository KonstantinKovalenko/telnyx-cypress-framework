import Header from "../pages/header";
import HomePage from "../pages/home.page";

describe('TC-02 Verify header menu hides on downward scrolling and reappears on upward scrolling', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('should show header reaction on page scroll ', () => {

    Header.getHeader().should('be.visible')

    HomePage.getFeatureDemoSection().scrollIntoView()         // one way

    Header.getHeader().should('not.be.visible')

    cy.scrollTo(0,0)                                          //other way

    Header.getHeader().should('be.visible')
  });
});