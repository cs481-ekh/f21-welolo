import InputFields from './InputField.js';
const inputFields = new InputFields();

describe('Verify input fields are present', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
    it('Visits the site & verifies elements', () => {
        inputFields.reciepientName().should('be.visible')
        inputFields.reciepientPhone().should('be.visible')
        inputFields.fundQuantity().should('be.visible')
        inputFields.message().should('be.visible')
        inputFields.submit().should('be.visible')
    })
    it('Verify the correct input!', () => {
        inputFields.reciepientName().type('John')
        inputFields.reciepientPhone().type('2089192325')
        inputFields.fundQuantity().type('100')
        inputFields.message().type('We have paid $100')
        inputFields.reciepientName().invoke('val').should('eq', 'John')
        inputFields.reciepientPhone().invoke('val').should('eq', '2089192325')
        inputFields.fundQuantity().invoke('val').should('eq', '100')
        inputFields.message().invoke('val').should('eq', 'We have paid $100')
    })

    it('Verify the length', () => {
        inputFields.reciepientName().type('John')
        inputFields.reciepientPhone().type('2089192325')
        inputFields.fundQuantity().type('100')
        inputFields.message().type('We have paid $100')
        inputFields.reciepientName().invoke('val').should('have.length', 4)
        inputFields.reciepientPhone().invoke('val').should('have.length', 10)
        inputFields.fundQuantity().invoke('val').should('have.length', 3)
        inputFields.message().invoke('val').should('have.length', 17)
        inputFields.submit().click()
    })
    it('Verify if fields contains the correct inputs', () =>{
        inputFields.reciepientName().type('John').invoke('val').should('match', /[a-zA-Z]+$/)
        inputFields.reciepientPhone().type('2089192325').invoke('val').should('match', /[0-9]+$/)
        inputFields.fundQuantity().type('100').invoke('val').should('match', /[0-9]+$/)
        inputFields.message().type('We have paid $100').invoke('val').should('match', /[a-zA-Z0-9$]+$/)