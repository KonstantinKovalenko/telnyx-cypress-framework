class SignUpPage {
    #HOMEURL = "https://telnyx.com/sign-up"


    open (){
        cy.visit(this.#HOMEURL)
    }
}

export default new SignUpPage();