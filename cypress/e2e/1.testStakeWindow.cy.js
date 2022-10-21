/// <reference types="Cypress"/>

import Stake from '../pageObjects/Stake';
import Dashboard from '../pageObjects/Dashboard';

describe('Verify Stake Page of Dafi', () => {
    
    const db = new Dashboard();
    const sk = new Stake();

    it('Visit Dashboard Page', () => {
        db.visitDashboard()
    })

    it('Clicking on Super Stake now button', () => {
        db.clickSuperStakeNowButton()
        cy.wait(5000)  // wait 5 seconds
    })

    it('Visit Stake Page', () => {
        sk.visitStakePage();
        cy.log('opened stake page')
    })
        
    it('Verifing title of Stake Page', () => {
        cy.title().should('eq', 'DAFI Super Staking');
    })

    it('Verifing Placeholder value equals to zero', () => {
        sk.checkPlaceholder();
    })

    it('Verifing Your balance value', () => {
        sk.checkBalance()
    })

    it.skip('Verifying approve button is disabled when balance is less than 2500', () => {
        sk.verifyApproveButtonIsDisable()
    })

    it.skip('Verifying approve button is enabled when balance is 2500 or greater', () => {
        sk.verifyApproveButtonIsEnable()
    })

    it.skip('clicking approve button', () => {
        sk.approveTransaction()
    })

    it.skip('clicking proceed button', () => {
        sk.proceedTransaction()
        cy.wait(9000)
    })

    it.skip('confirm metamask approval window', () => {
        sk.ConfirmMetamaskTransaction()
        cy.wait(6000)
    })

    it('Verifying stake button is enabled', () => {
        sk.verifyStakeButtonIsEnable()
    })

    it('clicking on stake button', () => {
        sk.clickStakeButton()
    })

    //it.skip('clicking proceed button', () => {
    //    sk.proceedTransaction()
    //    cy.wait(9000)
    //})

    it('performing stake transaction', () => {
        sk.proceedTransaction()
        cy.wait(9000)
        sk.executeStakeTransaction()
    })

})

// describe('Xlsx file', () => {
//     it('Read excel file', () => {
//       cy.task('readXlsx', { file: 'E:/Git_Xord/Synpress/Dafi-automation-synpress/cypress/fixtures/stakeData.xlsx', sheet: "Sheet1" }).then((rows) => {
//       expect(rows.length).to.equal(6)   //total rows in sheet1

//       cy.fixture('excel-login.json').then(signindata => {
//         for(let i=0; i<=signindata.length; i++){
//             cy.log("Index: ", signindata[i])
//         }
            
//         })
//       })

// describe('Xlsx file', () => {
// cy.fixture('stakeData.json').then(signindata => {
//     for(let i=0; i<=signindata.length; i++){
//         cy.log("Index: ", signindata[i])
//     }
// })

//   tests.forEach(test => {
//     it('using json data for login', function()
//     {   
//         cy.wait(2000)
//         for (let x=rows[0]; x < 4; x++){
//           cy.login(x["email"], x["password"])
//         }
//     })


//     })
// })