import InputFields from './InputField.js';
const inputFields = new InputFields();

describe('Verify Successful SMS', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
    it('Verify form opened correctly', () => {
        inputFields.recipientName().should('be.visible')
        inputFields.recipientPhone().should('be.visible')
        inputFields.fundQuantity().should('be.visible')
        inputFields.message().should('be.visible')
        inputFields.submit().should('be.visible')
    })
    it('Verify values placed in the correct place', () => {
        inputFields.recipientName().type('John')
        inputFields.recipientPhone().type('+17025763855')
        inputFields.fundQuantity().type('100')
        inputFields.message().type('We have paid $100');
        inputFields.recipientName().invoke('val').should('eq', 'John')
        inputFields.recipientPhone().invoke('val').should('eq', '+17025763855')
        inputFields.fundQuantity().invoke('val').should('eq', '100')
        inputFields.message().invoke('val').should('eq', 'We have paid $100')
    })
    it('Verify SMS successful on valid input', () => {
        inputFields.recipientName().type('John')
        inputFields.recipientPhone().type('+17025763855')
        inputFields.fundQuantity().type('100')
        inputFields.message().type('We have paid $100');
        inputFields.recipientName().invoke('val').should('eq', 'John')
        inputFields.recipientPhone().invoke('val').should('eq', '+17025763855')
        inputFields.fundQuantity().invoke('val').should('eq', '100')
        inputFields.message().invoke('val').should('eq', 'We have paid $100')

        cy.server();
        cy.route('POST', '/api/send_message/').as('send_message');
        inputFields.submit().click();
        cy.wait(['@send_message'], { responseTimeout: 15000 });

    })
})