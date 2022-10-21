/// <reference types="Cypress"/>

import Withdraw from '../pageObjects/Withdraw';
import Dashboard from '../pageObjects/Dashboard'

describe('Verify Withdraw Page of Dafi', () => {
    
    const db = new Dashboard();
    const wd = new Withdraw();

    it('Visit Dashboard Page', () => {
        db.visitDashboard()
    })

    it('Clicking on Super Stake now button', () => {
        db.clickSuperStakeNowButton()
        cy.wait(5000)  //wait 5 seconds
    })

    it('Visit Withdraw Page', () => {
        wd.visitWithdrawPage()
        cy.log('opened withdraw page')
    })
        
    it('Verifing title of withdraw page', () => {
        cy.title().should('eq', 'DAFI Super Staking');
    })

    it('Verifing Placeholder value equals to zero', () => {
        wd.checkPlaceholder();
    })

    it('Verifying withdraw button is disabled with invalid inputs', () => {
        wd.verifyWithdrawButtonIsDisable()
    })

    it('Verifying withdraw button is enabled with valid inputs', () => {
        wd.verifyWithdrawButtonIsEnable()
    })

    it('clicking withdraw button', () => {
        wd.approveTransaction()
    })

    it('clicking proceed button', () => {
        wd.proceedTransaction()
        cy.wait(12000)
    })

    it('performing withdraw transaction', () => {
        wd.executeUnstakeTransaction()
    })

})