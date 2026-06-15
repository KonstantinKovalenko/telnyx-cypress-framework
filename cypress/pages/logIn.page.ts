class LogInPage {
    #HOMEURL = "https://portal.telnyx.com/#/login/sign-in"


    open (){
        cy.visit(this.#HOMEURL)
    }
}

export default new LogInPage();