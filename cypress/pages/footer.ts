class Footer {

    private selectors = {
        globalFooter: '#site-footer'
    }

    getFooter(){
        return cy.get(this.selectors.globalFooter)
    }

    getCompanyBlock(){
        return cy.contains('p', 'Company')
    }

    getOurNetworkLink(){
        return cy.get(this.selectors.globalFooter).contains('a[href="/our-network"]', 'Our Network');
    }

    getSocialBlock(){
        return cy.contains('p', 'Social')
    }

    getPrivacyPolicyLink(){
        return cy.get(this.selectors.globalFooter).contains('a[href="/privacy-policy"]', 'Privacy Policy');
    }
}

export default new Footer();