import Header from "../pages/header"
import ContactUsPage from "../pages/contactUs.page"

describe('TC-03, TC-04, "Contact us" form submission & validation', () => {

  beforeEach(() => {
    cy.openHomePage()
  })

  it('should verify form submission using valid data', () => {
    const reason = "Support"
    const countryIndex = 5

    Header.getContactUsButton().should('be.visible').and('not.be.disabled').click()

    ContactUsPage.getMainForm().should('be.visible')

    ContactUsPage.selectReasonByName(reason)
    ContactUsPage.selectCountryByIndex(countryIndex)

    cy.fixture('contactUs').then((data) => {
      ContactUsPage.fillQueryForm(data.validUser)
    })

    ContactUsPage.getSubmitBtn().should('be.enabled').click()
    
    cy.contains('Thank you').should('be.visible')
  }) 

  it('should show form validation with empty fields', () => {
    Header.getContactUsButton().should('be.visible').click()

    ContactUsPage.getMainForm().should('be.visible')
    ContactUsPage.submitForm()
    ContactUsPage.getReasonSelectError().should('be.visible').and('contain.text','This field is required')

    ContactUsPage.getMainForm().should('be.visible')
    cy.contains('Thank you').should('not.exist')
  })
})