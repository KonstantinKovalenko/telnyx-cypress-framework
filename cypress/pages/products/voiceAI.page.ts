class VoiceAIPage {

    getHeadline(){
        return cy.contains('Voice AI Agents')
    }
}

export default new VoiceAIPage();

