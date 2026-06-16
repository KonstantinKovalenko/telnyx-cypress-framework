class HomePage {
    private selectors = {
        headline: '#hero-headline',
        exploreButton: '[data-content="EXPLORE THE STACK"]',
        fullStackDetail: '#full-stack-detail',
        featureDemo: '#feature-demo'
    };

    open(): void {
        cy.visit('/')
    }

    getMainHeadline() {
        return cy.get(this.selectors.headline);
    }

    getExploreStackButton() {
        return cy.get(this.selectors.exploreButton);
    }

    getFullStackSection() {
        return cy.get(this.selectors.fullStackDetail);
    }

    getFeatureDemoSection(){
        return cy.get(this.selectors.featureDemo)
    }
}

export default new HomePage();