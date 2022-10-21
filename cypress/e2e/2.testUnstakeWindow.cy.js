/// <reference types="Cypress"/>

import Unstake from '../pageObjects/Unstake';
import Dashboard from '../pageObjects/Dashboard';

describe('Verify Unstake Page of Dafi', () => {
    
    const db = new Dashboard();
    const usk = new Unstake();

    it('Visit Dashboard Page', () => {
        db.visitDashboard()
    })

    it('Clicking on Super Stake now button', () => {
        db.clickSuperStakeNowButton()
        cy.wait(5000)  //wait 5 seconds
    })

    it('Visit Unstake Page', () => {
        usk.visitUnstakePage()
        cy.log('opened unstake page')
    })
        
    it('Verifing title of unstake page', () => {
        cy.title().should('eq', 'DAFI Super Staking');
    })

    it('Verifing Placeholder value equals to zero', () => {
        usk.checkPlaceholder();
    })

    it('Verifying unstake button is disabled with invalid inputs', () => {
        usk.verifyUnstakeButtonIsDisable()
    })

    it('Verifying unstake button is enabled with valid inputs', () => {
        usk.verifyApproveButtonIsEnable()
    })

    it('clicking unstake button', () => {
        usk.approveTransaction()
    })

    it('clicking proceed button', () => {
        usk.proceedTransaction()
        cy.wait(9000)
    })

    it('performing unstake transaction', () => {
        usk.executeUnstakeTransaction()
    })

})