describe('Testing that selecting an item fills in textbox on payment page', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000/pay_forward/5')
    })
    it('First item selection', () => {
        cy.get("#sender_quantity").invoke('val').should('eq', '5');
        cy.get('#sender_quantity').should('have.attr', 'readonly', 'readonly')

    })
    it('Second item selection', () => {
        cy.get("#sender_quantity").invoke('val').should('eq', '5');
        cy.get('#sender_quantity').should('have.attr', 'readonly', 'readonly')
    })
    it('Second item selection', () => {
        cy.get("#sender_quantity").invoke('val').should('eq', '5');
        cy.get('#sender_quantity').should('have.attr', 'readonly', 'readonly')
    })
})

describe('Testing that selecting an item fills in textbox on payment page', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000/view_menu/5')
    })

    it('Skipping item selection', () => {
        cy.get("#skip_item_select").click();
        cy.get("#sender_quantity").invoke('val').should('eq', '');
        cy.get('#sender_quantity').not('have.attr', 'readonly', 'readonly')
    }) 
})
