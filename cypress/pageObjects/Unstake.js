class Unstake
{
    visitUnstakePage(){  
        cy.get('.jss50 > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click() //opening stake page
        cy.contains('Unstake').click()  //locating Unstake and clicking on it
    }

    checkPlaceholder(){
        cy.get('#outlined-basic').invoke('attr', 'placeholder').should('eq', '0')
    }

    verifyUnstakeButtonIsDisable(){
        cy.get('#outlined-basic').type('0')
        cy.get('button').contains('Unstake').should('be.disabled')
        cy.get('#outlined-basic').clear()
        cy.get('#outlined-basic').type('-1')
        cy.get('button').contains('Unstake').should('be.disabled')
        cy.get('#outlined-basic').clear()
        cy.get('#outlined-basic').type('-33.00')
        cy.get('button').contains('Unstake').should('be.disabled')
        cy.get('#outlined-basic').clear()
        cy.get('#outlined-basic').type('Testing')
        cy.get('button').contains('Unstake').should('be.disabled')
        cy.get('#outlined-basic').clear()
        cy.get('#outlined-basic').type('0..')
        cy.get('button').contains('Unstake').should('be.disabled')
    }

    verifyUnstakeButtonIsEnable(){
        cy.get('#outlined-basic').clear()
        cy.get('#outlined-basic').type('2500')
        cy.contains('Unstake').should('not.be.disabled')
    }

    approveTransaction(){
        cy.contains('Unstake').click()
    }

    proceedTransaction(){
        cy.contains('Proceed').click()
    }
   
    executeUnstakeTransaction(){
        cy.confirmMetamaskTransaction()
    }

}

export default Unstake