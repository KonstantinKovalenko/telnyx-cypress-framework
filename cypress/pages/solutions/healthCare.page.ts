class HealthcarePage {

    getHeader(){
        return cy.contains('h1', 'healthcare')
    }

}

export default new HealthcarePage();