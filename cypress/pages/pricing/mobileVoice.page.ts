class MobileVoicePage {

    private selectors = {
        payAsYouGoLink: '[href="#pay-as-you-go"]',
        carrierFeeLink: '[href="#carrier-fees"]',
        signUpBtn: '[data-content="Sign up"]'
        
    }

    getPayAsYouGoLink(){
        return cy.get(this.selectors.payAsYouGoLink)
    }

    getCarrierFeeLink(){
        return cy.get(this.selectors.carrierFeeLink).eq(0)
    }

    getSignUpBtn(){
        return cy.get(this.selectors.signUpBtn).eq(1)
    }

}

export default new MobileVoicePage();
