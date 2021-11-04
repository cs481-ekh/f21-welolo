import InputFields from './InputField.js';
const inputFields = new InputFields();

describe("Testing Successful Payment + Successful SMS", () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })

    it('Visits the site & verifies elements', () => {
        inputFields.recipientName().should('be.visible')
        inputFields.recipientPhone().should('be.visible')
        inputFields.fundQuantity().should('be.visible')
        inputFields.message().should('be.visible')
        inputFields.submit().should('be.visible')
    })

    it('Inputs valid information into the text box and verifies integrity', () => {
        inputFields.recipientName().type('John')
        inputFields.recipientPhone().type('+15005550000')
        inputFields.fundQuantity().type('100.00')
        inputFields.message().type('We have paid $100')
        inputFields.recipientName().invoke('val').should('eq', 'John')
        inputFields.recipientPhone().invoke('val').should('eq', '+15005550000')
        inputFields.fundQuantity().invoke('val').should('eq', '100.00')
        inputFields.message().invoke('val').should('eq', 'We have paid $100')
    })
    
    it('Verifies successful response after submission', () => {
        inputFields.submit().click()
            .then(() => {
                inputFields.paymentModal().should('be.visible')
            })
    })
})