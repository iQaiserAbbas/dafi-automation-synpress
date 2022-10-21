/// <reference types="Cypress"/>

import Superpool from '../pageObjects/Superpool';
import Dashboard from '../pageObjects/Dashboard';

describe('Verify Superpool Page of Dafi', () => {

    const db = new Dashboard();
    const sp = new Superpool();

    it('Visit Dashboard Page', () => {
        db.visitDashboard()
    })

    it('Clicking on Super Stake now button', () => {
        db.clickSuperStakeNowButton()
        cy.wait(5000)  //wait 5 seconds
    })

    it('Visit Superpool Page', () => {
        sp.visitSuperpoolPage()
        cy.log('opened Superpool page');
    })
        
    it('Verifing title of Super pool page', () => {
        cy.title().should('eq', 'DAFI Super Pool');
    })

})