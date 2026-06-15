class SupportCenterPage {
    #HOMEURL = "https://support.telnyx.com/en/"

    open (){
        cy.visit(this.#HOMEURL)
    }

}

export default new SupportCenterPage();



