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
    })
    it('verify the correct input!', () => {
        inputFields.reciepientName().type('John')
        inputFields.reciepientPhone().type('2089192325')
        inputFields.fundQuantity().type('100')
        inputFields.message().type('We have paid $100')
        cy.get("[data-cy=recipient_name]").invoke('val').should('eq', 'John')
        cy.get("[data-cy=recipient_ph]").invoke('val').should('eq', '2089192325')
        cy.get("[data-cy=fund_quantity]").invoke('val').should('eq', '100')
        cy.get("[data-cy=message]").invoke('val').should('eq', 'We have paid $100')
    })

    it('verify the length', () => {
        inputFields.reciepientName().type('John')
        inputFields.reciepientPhone().type('2089192325')
        inputFields.fundQuantity().type('100')
        inputFields.message().type('We have paid $100')
        cy.get("[data-cy=recipient_name]").invoke('val').should('have.length', 4)
        cy.get("[data-cy=recipient_ph]").invoke('val').should('have.length', 10)
        cy.get("[data-cy=fund_quantity]").invoke('val').should('have.length', 3)
        cy.get("[data-cy=message]").invoke('val').should('have.length', 17)
        inputFields.submit().click()
    })
  })
  