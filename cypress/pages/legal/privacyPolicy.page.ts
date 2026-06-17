class PrivacyPolicyPage {

    getHeader(){
        return cy.contains('h1', 'Privacy Policy')
    }
}

export default new PrivacyPolicyPage();