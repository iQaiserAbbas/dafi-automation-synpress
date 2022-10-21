/// <reference types="cypress-xpath" />

class Dashboard
{

    binancePoolDominance = "";
    ethereumPoolDominance = "";
    polygonPoolDominance = "";
    poolDominanceSum = 0;

    visitDashboard(){
        cy.visit('https://stake.dafiprotocol.io/');
    }

    clickSuperStakeNowButton(){
        cy.get('.MuiButton-label').should('not.be.disabled').click() 
        //cy.xpath('//*[@id="root"]/div/div[2]/div/button/span[1]').click()
    }

    verifyTwitterUrl(){
            cy.contains('© 2022 DAFI Protocol').parent().children().children()
            .should('have.attr', 'href', 'https://twitter.com/dafiprotocol')
    }
    verifyMediumUrl(){
        cy.contains('© 2022 DAFI Protocol').parent().children().children().next()
        .should('have.attr', 'href', 'https://dafiprotocol.medium.com/')
    }

    verifyTelegramUrl(){
        cy.contains('© 2022 DAFI Protocol').parent().children().children().next().next()
        .should('have.attr', 'href', 'https://t.me/dafiprotocol')
    }

    verifyLinkedinUrl(){
        cy.contains('© 2022 DAFI Protocol').parent().children().children().next().next().next()
        .invoke('attr', 'href')
        .should('eq', 'https://www.linkedin.com/company/dafiprotocol');
    }

    verifyBinancePoolDominance(){
        cy.get(':nth-child(1) > .progress-label').then(($val) => {
                this.binancePoolDominance = $val.text();
                this.binancePoolDominance = this.binancePoolDominance.slice(0,-1) //removing % from end of string 
                this.binancePoolDominance = parseFloat(this.binancePoolDominance) //converting string to float
                cy.log(this.binancePoolDominance);
            })
    }
    
    verifyEthereumPoolDominance(){
      cy.get(':nth-child(2) > .progress-label').then(($val) => {
                this.ethereumPoolDominance = $val.text();
                this.ethereumPoolDominance =this.ethereumPoolDominance.slice(0,-1); //removing last character of string (%)
                this.ethereumPoolDominance = parseFloat(this.ethereumPoolDominance) //converting string to float
                cy.log(this.ethereumPoolDominance);
              })
    }

    
    verifyPolygonPoolDominance(){
      cy.get('[style="margin-right: 0px;"] > .progress-label').then(($val) => {
                this.polygonPoolDominance = $val.text();
                this.polygonPoolDominance =this.polygonPoolDominance.slice(0,-1); //removing last character of string (%)
                this.polygonPoolDominance = parseFloat(this.polygonPoolDominance) //converting string to float
                cy.log(this.polygonPoolDominance);

            })
        }

        verifySum(){
                this.poolDominanceSum= this.binancePoolDominance + this.ethereumPoolDominance + this.polygonPoolDominance;

                this.poolDominanceSum = Math.round(this.poolDominanceSum)

                expect(this.poolDominanceSum).to.equal(100)
    
            //   cy.get(':nth-child(2) > .MuiGrid-grid-md-5 > .MuiPaper-root > .MuiCardContent-root > .MuiTypography-root') //pool dominance       
        }

    verifyButtonsAreEnabled(){
        cy.contains('button', '1 Day').should('not.be.disabled')
        //cy.contains('button', '1 Day').should('be.enabled')
        cy.contains('button', '7 Days').should('not.be.disabled')
        //cy.contains('button', '7 Days').should('be.enabled')
        cy.contains('button', '30 Days').should('not.be.disabled')
        //cy.contains('button', '30 days').should('be.enabled')
        cy.contains('button', 'All').should('not.be.disabled')
        //cy.contains('button', 'All').should('be.enabled')
    }

    checkTopFiveUsers(){
        cy.get('.MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiListItem-root > .MuiListItemText-root > .MuiTypography-root').should('be.visible')

        cy.get('.MuiCardContent-root > .MuiList-root > :nth-child(2) > .MuiListItem-root > .MuiListItemText-root > .MuiTypography-root').should('be.visible')

        cy.get('.MuiCardContent-root > .MuiList-root > :nth-child(3) > .MuiListItem-root > .MuiListItemText-root > .MuiTypography-root').should('be.visible')

        cy.get('.MuiCardContent-root > .MuiList-root > :nth-child(4) > .MuiListItem-root > .MuiListItemText-root > .MuiTypography-root').should('be.visible')

        cy.get('.MuiCardContent-root > .MuiList-root > :nth-child(5) > .MuiListItem-root > .MuiListItemText-root > .MuiTypography-root').should('be.visible')
    }

    verifyNextButtons(){
        cy.get('[tabindex="0"] > .MuiButton-label > .MuiSvgIcon-root').click()
        cy.get(':nth-child(3) > .MuiButton-label > .MuiSvgIcon-root').click()
    }

    verifyPreviousButtons(){
        cy.get(':nth-child(3) > .MuiButton-label > .MuiSvgIcon-root').click()
        cy.get(':nth-child(1) > .MuiButton-label > .MuiSvgIcon-root').click()
    }

    verifyRewardBalanceGraph(){
        // cy.get('#SvgjsSvg1376').should('be.visible')
    }

    viewTotalDafiStaked(){
        //cy.contains('M').next().children().invoke('text').then((text1) => {
            //expect(text1).to.eq('Total DAFI Staked')
        //})

        cy.wait(12000)
    }
}

export default Dashboard