class Stake
{
    
    visitStakePage(){  
        cy.get('.jss50 > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click() //opening stake page
    }

    checkBalance(){
        cy.contains('Your Balance:', { matchCase: false })
            .children()
            .should('be.visible') //locating Your Balance
        cy.contains('Your Balance:', { matchCase: false })
            .children().then(($val) => {
                const yourBalance = $val.text();
                cy.log(yourBalance);
              })
    }

    checkPlaceholder(){
        cy.get('#outlined-basic').invoke('attr', 'placeholder').should('eq', '0')
    }

    verifyApproveButtonIsDisable(){
        cy.get('#outlined-basic').type('2499')
        cy.contains('Approve').should('be.disabled')
        cy.get('#outlined-basic').clear()
        cy.get('#outlined-basic').type('0')
        cy.contains('Approve').should('be.disabled')
        cy.get('#outlined-basic').clear()
        cy.get('#outlined-basic').type('-1')
        cy.contains('Approve').should('be.disabled')
        cy.get('#outlined-basic').clear()
        cy.get('#outlined-basic').type('2499.99')
        cy.contains('Approve').should('be.disabled')
        cy.get('#outlined-basic').clear()
        cy.get('#outlined-basic').type('200.2.2.')
        cy.contains('Approve').should('be.disabled')
        cy.get('#outlined-basic').clear()
        cy.get('#outlined-basic').type('0')
        cy.contains('Approve').should('be.disabled')
    }

    verifyApproveButtonIsEnable(){
        cy.get('#outlined-basic').clear()
        cy.get('#outlined-basic').type('2500')
        cy.contains('Approve').should('not.be.disabled')
    }

    approveTransaction(){
        cy.contains('Approve').click()
    }

    proceedTransaction(){
        cy.contains('Proceed').click()
    }

    ConfirmMetamaskTransaction(){
        cy.confirmMetamaskPermissionToSpend()
    }

    verifyStakeButtonIsEnable(){
        cy.get('#outlined-basic')
            .clear()
        cy.get('#outlined-basic')
            .type('2500')
        cy.get('button').contains('Stake')
            .should('not.be.disabled')
    }

    clickStakeButton(){
        cy.get('button').contains('Stake')
            .click()
    }

    executeStakeTransaction(){
        cy.confirmMetamaskTransaction()

    }



}

export default Stake
