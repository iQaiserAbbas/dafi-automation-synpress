/// <reference types="Cypress"/>

import Dashboard from '../pageObjects/Dashboard';

describe('Testing Dafi Dashboard', () => {
    
    const db = new Dashboard();
    
    it('Visit Dashboard', () => {
        db.visitDashboard()
        cy.contains('Super Stake')
        cy.switchToMetamaskWindow();
        cy.acceptMetamaskAccess()
            .should("be.true");
        cy.switchToCypressWindow();
    })
    
    it('Verify title is DAFI', () => {
         cy.title()
            .should('eq', 'DAFI');
    })

    it('Clicking on Super Stake now! button', () => {
        db.clickSuperStakeNowButton() 
    })

    it('Verifying twitter url', () => {
        db.verifyTwitterUrl()
    })

    it('Verifying medium url', () => {
        db.verifyMediumUrl()
    })

    it('Verifying telegram url', () => {
        db.verifyTelegramUrl()
    })

    it('Verifying linkedin url', () => {
        db.verifyLinkedinUrl()
    })

    it('Verifying Binance Pool Dominance', () => {
        db.verifyBinancePoolDominance()
    })

    it('Verifying Ethereum Pool Dominance', () => {
        db.verifyEthereumPoolDominance()
    })

    it('Verifying Polygon Pool Dominance', () => {
        db.verifyPolygonPoolDominance()
    })

    it('Verifying Sum of Pool Dominance', () => {
        db.verifySum()
    })

    it('Verifying Disabled buttons', () => {
        db.verifyButtonsAreEnabled()
    })

    it('Verifying Top 5 users', () => {
        db.checkTopFiveUsers()
    })

    it('Verifying Reward Balance Graph', () => {
        db.verifyRewardBalanceGraph()
    })

    it('Verifying Transaction next buttons', () => {
        db.verifyNextButtons()
    })

    it('Verifying Transaction previous buttons', () => {
        db.verifyPreviousButtons()
    })

    it('view staked dafi', () => {
        db.viewTotalDafiStaked()
    })
    
    // it('Connects with Metamask', () => {
    //     cy.contains('Connect Wallet').click();
    //     cy.contains('Metamask').click();
    //     cy.switchToMetamaskWindow();
    //     cy.acceptMetamaskAccess().should("be.true");
    //     cy.switchToCypressWindow();
    //  })


    // cy.get('button').contains('Learn more')

    // // In shorter form:
    // cy.contains('button', 'Learn more')

})