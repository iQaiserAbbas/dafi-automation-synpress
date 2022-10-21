/// <reference types="Cypress"/>

import Ranks from '../pageObjects/Ranks';
import Dashboard from '../pageObjects/Dashboard'

describe('Verify ranks Page of Dafi', () => {

    const db = new Dashboard();
    const rk = new Ranks();

    it('Visit Dashboard Page', () => {
        db.visitDashboard()
    })

    it('Clicking on Super Stake now button', () => {
        db.clickSuperStakeNowButton();
        cy.wait(5000)  //wait 5 seconds
    })

    it('Visit Ranks Page', () => {
        rk.visitRanksPage();
        cy.log('opened Ranks page');
    })
        
    it('Verifing title of Ranks page', () => {
        //cy.title().should('eq', 'DAFI Ranks');
    })

})