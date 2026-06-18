class MobileVoicePage {

    private selectors = {
        payAsYouGoLink: '[href="#pay-as-you-go"]',
        outboundCallSection: '#make-outbound-calls'
    }

    getPayAsYouGoLink(){
        return cy.get(this.selectors.payAsYouGoLink)
    }

    getCarrierFeeLink(){
        return cy.get(this.selectors.outboundCallSection).contains('a', 'Carrier fee')
    }

    getSignUpBtn(){
        return cy.contains('section', 'Sign up').find('a[href="/sign-up"]')
    }
}

export default new MobileVoicePage();
