class Header {
    private selectors = {
        globalHeader: '#site-header',
        contactUsButton: '[href="https://telnyx.com/contact-us"]'
    };

    getHeader(){
        return cy.get(this.selectors.globalHeader)
    }

    getContactUsButton(){
        return cy.get(this.selectors.contactUsButton).eq(1)
    }
}

export default new Header();