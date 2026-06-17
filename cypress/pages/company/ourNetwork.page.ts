class OurNetworkPage {

    getHeader(){
        return cy.contains('h1', 'global network')
    }

}

export default new OurNetworkPage();