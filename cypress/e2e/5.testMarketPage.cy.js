/// <reference types="Cypress"/>

import Market from '../pageObjects/Market';
import Dashboard from '../pageObjects/Dashboard'

describe('Verify market Page of Dafi', () => {

    const db = new Dashboard();
    const mk = new Market();

    it('Visit Dashboard Page', () => {
        db.visitDashboard()
    })

    it('Clicking on Super Stake now button', () => {
        db.clickSuperStakeNowButton()
        cy.wait(5000)  //wait 5 seconds
    })

    it('Visit Market Page', () => {
        mk.visitMarketPage();
        cy.log('opened Market page');
    })
        
    it('Verifing title of Market page', () => {
        cy.title().should('eq', 'DAFI Market');
    })

})