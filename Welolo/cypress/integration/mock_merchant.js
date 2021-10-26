describe('Testing that selecting an item fills in textbox on payment page', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
    it('First item selection', () => {
        cy.get("#button1").click();
        cy.get("#sender_quantity").invoke('val').should('eq', '4');

    })
    it('Second item selection', () => {
        cy.get("#button2").click();
        cy.get("#sender_quantity").invoke('val').should('eq', '2');
    })
    it('Second item selection', () => {
        cy.get("#button3").click();
        cy.get("#sender_quantity").invoke('val').should('eq', '50');
    })
})

describe('Testing that selecting an item fills in textbox on payment page', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })

    it('Skipping item selection', () => {
        cy.get("#skipButton").click();
        cy.get("#sender_quantity").invoke('val').should('eq', '');
    }) 
})
