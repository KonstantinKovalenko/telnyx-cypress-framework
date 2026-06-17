class Header {
    private selectors = {
        globalHeader: '#site-header',
        mainMenu: '#main-menu',

        contactUsBtn: '[href="https://telnyx.com/contact-us"]',
        productsBtn: '#radix-_R_4b9iivb_',
        hamburgerBtn: '[aria-controls="main-menu-content"]',
        logInBtn: '[href="https://portal.telnyx.com"]',

        voiceAIFrame: '[href="/products/voice-ai-agents"]',
        healthCareFrame: '[href="/solutions/healthcare"]',
        supportCenterFrame: '[href="https://support.telnyx.com/en/"]'
    };

    getHeader(){
        return cy.get(this.selectors.globalHeader)
    }

    getContactUsButton(){
        return cy.get(this.selectors.contactUsBtn).eq(1)
    }

    getProductsBtn(){
        return cy.get(this.selectors.productsBtn)
    }

    getVoiceAiFrame(){
        return cy.get(this.selectors.voiceAIFrame).eq(1)
    }

    getPricingBtn(){
        return cy.contains('span', 'Pricing')
    }

    getMobileVoiceFrame(){
        return cy.contains('h2', 'Mobile Voice')
    }

    getHamburgerBtn(){
        return cy.get(this.selectors.hamburgerBtn)
    }

    getMainMenu(){
        return cy.get(this.selectors.mainMenu)
    }

    getSolutionsBtn(){
        return cy.contains('span', 'Solutions')
    }

    getHealthcareFrame(){
        return cy.get(this.selectors.healthCareFrame).eq(2)
    }

    getResourcesBtn(){
        return cy.contains('span', 'Resources')
    }

    getSupportCenterFrame(){
        return cy.get(this.selectors.supportCenterFrame).eq(1)
    }

    getLogInBtn(){
        return cy.get(this.selectors.logInBtn).eq(1)
    }
}

export default new Header();
