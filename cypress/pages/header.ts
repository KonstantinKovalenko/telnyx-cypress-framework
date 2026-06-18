class Header {
    private selectors = {
        globalHeader: '#site-header',
        mainMenu: '#main-menu',

        hamburgerBtn: '[aria-controls="main-menu-content"]',

        healthCareFrameMobile: '.overflow-auto',
        supportCenterFrame: '[role="menu"]'
    }

    getHeader(){
        return cy.get(this.selectors.globalHeader)
    }

    getContactUsButton(){
        return cy.get('header').find('div.ml-auto').contains('a', 'Contact us')
    }

    getProductsBtn(){
        return cy.get('button').contains('span', 'Products')
    }

    getVoiceAIFrame(){
        return cy.contains('h2', 'Voice AI')
    }

    getPricingBtn(){
        return cy.get('button').contains('span', 'Pricing')
    }

    getMobileVoiceFrame(){
        return cy.contains('h2', 'Mobile Voice')
    }

    getHamburgerBtn(){
        return cy.get('button[aria-controls="main-menu-content"]')
    }

    getMainMenu(){
        return cy.get(this.selectors.mainMenu)
    }

    getSolutionsBtn(){
        return cy.get('button').contains('span', 'Solutions')
    }

    getHealthCareFrame(){
        return cy.get(this.selectors.healthCareFrameMobile).contains('h2', 'Healthcare')
    }

    getResourcesBtn(){
        return cy.get('button').contains('span', 'Resources')
    }

    getSupportCenterFrame(){
        return cy.get(this.selectors.supportCenterFrame).contains('a[href="https://support.telnyx.com/en/"]', 'Support center')
    }

    getLogInBtn(){
        return cy.get('header').find('div.ml-auto').contains('a', 'Log in')
    }
}

export default new Header();