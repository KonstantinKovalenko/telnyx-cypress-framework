class HomePage {
    #HOMEURL = "https://telnyx.com/"

    get #headline () {return $('#hero-headline')}

    open (){
        cy.visit(this.#HOMEURL)
    }
}

export default new HomePage();