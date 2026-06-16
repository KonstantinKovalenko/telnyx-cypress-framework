class Header {
    private selectors = {
        globalHeader: '#site-header',

        contactUsBtn: '[href="https://telnyx.com/contact-us"]',
        productsBtn: '#radix-_R_4b9iivb_',

        voiceAIFrame: '#radix-_R_4b9iivbH1_'
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
        return cy.get(this.selectors.voiceAIFrame).find('a[href="/products/voice-ai"]').eq(0)
    }
}

export default new Header();
