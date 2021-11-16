import InputFields from './InputField.js';
const inputFields = new InputFields();

describe('Verify input fields are present', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000/pay_forward/5')
    })
    it('Visits the site & verifies elements', () => {
        inputFields.recipientName().should('be.visible')
        inputFields.recipientPhone().should('be.visible')
        inputFields.fundQuantity().should('be.visible')
        inputFields.message().should('be.visible')
        inputFields.submit().should('be.visible')
    })
    it('Verify the correct input!', () => {
        inputFields.recipientName().type('John')
        inputFields.recipientPhone().type('2089192325')
        inputFields.message().type('We have paid $5')
        inputFields.recipientName().invoke('val').should('eq', 'John')
        inputFields.recipientPhone().invoke('val').should('eq', '2089192325')
        inputFields.fundQuantity().invoke('val').should('eq', '5')
        inputFields.message().invoke('val').should('eq', 'We have paid $5')
    })

    it('Verify the length', () => {
        inputFields.recipientName().type('John')
        inputFields.recipientPhone().type('2089192325')
        inputFields.message().type('We have paid $5')
        inputFields.recipientName().invoke('val').should('have.length', 4)
        inputFields.recipientPhone().invoke('val').should('have.length', 10)
        inputFields.fundQuantity().invoke('val').should('have.length', 1)
        inputFields.message().invoke('val').should('have.length', 15)
        inputFields.submit().click()
    })
    it('Verify if fields contains the correct inputs', () =>{
        inputFields.recipientName().type('John').invoke('val').should('match', /[a-zA-Z]+$/)
        inputFields.recipientPhone().type('2089192325').invoke('val').should('match', /[0-9]+$/)
        inputFields.fundQuantity().invoke('val').should('match', /[0-9]+$/)
        inputFields.message().type('We have paid $5').invoke('val').should('match', /[a-zA-Z0-9$]+$/)
    })
})