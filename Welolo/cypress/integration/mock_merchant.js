describe('Testing that selecting an item fills in textbox on payment page', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
    it('First item selection', () => {
        cy.get("#button1").click();
        cy.get("#sender_quantity").invoke('val').should('eq', '4');
        cy.get('#sender_quantity').should('have.attr', 'readonly', 'readonly')

    })
    it('Second item selection', () => {
        cy.get("#button2").click();
        cy.get("#sender_quantity").invoke('val').should('eq', '2');
        cy.get('#sender_quantity').should('have.attr', 'readonly', 'readonly')
    })
    it('Second item selection', () => {
        cy.get("#button3").click();
        cy.get("#sender_quantity").invoke('val').should('eq', '50');
        cy.get('#sender_quantity').should('have.attr', 'readonly', 'readonly')
    })
})

describe('Testing that selecting an item fills in textbox on payment page', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })

    it('Skipping item selection', () => {
        cy.get("#skipButton").click();
        cy.get("#sender_quantity").invoke('val').should('eq', '');
        cy.get('#sender_quantity').not('have.attr', 'readonly', 'readonly')
    }) 
})
