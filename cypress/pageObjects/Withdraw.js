class Withdraw
{
    visitWithdrawPage(){  
        cy.get('.jss50 > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click() //opening stake page
        cy.contains('Withdraw').click()  //locating Withdraw and clicking on it
    }

    checkPlaceholder(){
        cy.get('#outlined-basic').invoke('attr', 'placeholder').should('eq', '0')
    }

    verifyWithdrawButtonIsDisable(){
        cy.get('#outlined-basic').type('0')
        cy.get('[tabindex=0]').should('be.disabled')
        cy.wait(9000)
        cy.get('#outlined-basic').clear()
        cy.get('#outlined-basic').type('-1')
        cy.get('.MuiContainer-maxWidthSm').find('button:nth(0)').click()
        cy.find('button:nth(1)').should('be.disabled')
        cy.wait(9000)
        cy.get('#outlined-basic').clear()
        cy.get('#outlined-basic').type('-33.00')
        cy.get('button').contains('Withdraw').find('button:nth(0)').should('be.disabled')
        cy.wait(9000)
        cy.get('#outlined-basic').clear()
        cy.get('#outlined-basic').type('Testing')
        cy.get('button').contains('Withdraw').find('button:nth(0)').should('be.disabled')
        cy.wait(9000)
        cy.get('#outlined-basic').clear()
        cy.get('#outlined-basic').type('0..')
        cy.get('button').contains('Withdraw').find('button:nth(0)').should('be.disabled')
        cy.wait(9000)
    }

    verifyWithdrawButtonIsEnable(){
        cy.get('#outlined-basic').clear()
        cy.get('#outlined-basic').type('20')
        cy.wait(9000)
        cy.contains('Withdraw').should('not.be.disabled')
    }

    approveTransaction(){
        cy.contains('Withdraw').click()
    }

    proceedTransaction(){
        cy.contains('Proceed').click()
    }
   
    executeWithdrawTransaction(){
        cy.confirmMetamaskTransaction()
    }
}

export default Withdraw