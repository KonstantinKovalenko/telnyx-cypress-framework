class SignUpPage {

    getHeader(){
        return cy.contains('h1', 'Create your account')
    }
}

export default new SignUpPage();