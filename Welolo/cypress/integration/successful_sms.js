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
    it('Verify success with valid phone number', () => {
        inputFields.recipientName
    })
})