interface ContactUser {
    reason: string
    countryIndex: number
    firstName: string
    lastName: string
    email: string
    phone: string
    company: string
    message: string
    query: string
}

class ContactUsPage {

    private selectors = {
        mainForm: '#mktoForm_1987',

        reasonSelect: '#Reason_for_Contact__c',
        countrySelect: '#Phone_Number_Extension__c',

        firstNameInput: '#FirstName',
        lastNameInput: '#LastName',
        emailInput: '#Email',
        phoneInput: '#Phone_Number_Base__c',
        companyInput: '#Website',
        textAreaInput: '#Form_Additional_Information__c',
        queryInput: '#How_did_you_hear_about_Telnyx_Open__c',

        submitBtn: '[class="mktoButton"]',

        reasonSelectErr: '#ValidMsgReason_for_Contact__c'
    }

    getMainForm(){
        return cy.get(this.selectors.mainForm)
    }

    getSubmitBtn(){
        return cy.get(this.selectors.submitBtn)
    }

    getReasonSelectError(){
        return cy.get(this.selectors.reasonSelectErr)
    }

    fillQueryForm(user: ContactUser){
        this.selectReasonByName(user.reason)
        this.selectCountryByIndex(user.countryIndex)
        cy.get(this.selectors.firstNameInput).type(user.firstName)
        cy.get(this.selectors.lastNameInput).type(user.lastName)
        cy.get(this.selectors.emailInput).type(user.email)
        cy.get(this.selectors.phoneInput).type(user.phone)
        cy.get(this.selectors.companyInput).type(user.company)
        cy.get(this.selectors.textAreaInput).type(user.message)
        cy.get(this.selectors.queryInput).type(user.query)
    }

    private selectReasonByName(value: string){
        const allowed = ['Sales Inquiry', 'Support']

        if (!allowed.includes(value)){
            throw new Error (`Invalid name: ${value}. Allowed values: ${allowed.join(', ')}`)
        }
        
        cy.get(this.selectors.reasonSelect).should('be.visible').select(value)
    }

    private selectCountryByIndex(index: number){
         cy.get(this.selectors.countrySelect).find('option').then($options => {
            const length = $options.length;

            if (index < 1 || index >= length) {
                throw new Error(`Index ${index} out of range. Valid range: 1 - ${length - 1}`)
            }
            cy.get(this.selectors.countrySelect).should('be.visible').select(index)
        })
    }

    submitForm(){
        this.getSubmitBtn().click()
    }
}

export default new ContactUsPage();