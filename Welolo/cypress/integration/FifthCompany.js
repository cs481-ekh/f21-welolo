describe('Fifth company tests', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })

    it('Item selection with id 205', () => {
        cy.get("#merchant_tile_select_merchant45").click();
        cy.url()
        .should('be.equal', 'http://localhost:3000/view_menu/45')
        cy.get("#item_tile_select_item205").click()
        cy.url()
        .should('be.equal', 'http://localhost:3000/pay_forward/205')
    })

    it('Item selection with id 215', () => {
        cy.get("#merchant_tile_select_merchant45").click();
        cy.url()
        .should('be.equal', 'http://localhost:3000/view_menu/45')
        cy.get("#item_tile_select_item215").click()
        cy.url()
        .should('be.equal', 'http://localhost:3000/pay_forward/215')
    })

    it('Item selection with id 225', () => {
        cy.get("#merchant_tile_select_merchant45").click();
        cy.url()
        .should('be.equal', 'http://localhost:3000/view_menu/45')
        cy.get("#item_tile_select_item225").click()
        cy.url()
        .should('be.equal', 'http://localhost:3000/pay_forward/225')
    })
    it('Item selection with id 235', () => {
        cy.get("#merchant_tile_select_merchant45").click();
        cy.url()
        .should('be.equal', 'http://localhost:3000/view_menu/45')
        cy.get("#item_tile_select_item235").click()
        cy.url()
        .should('be.equal', 'http://localhost:3000/pay_forward/235')
    })
    it('Item selection with id 245', () => {
        cy.get("#merchant_tile_select_merchant45").click();
        cy.url()
        .should('be.equal', 'http://localhost:3000/view_menu/45')
        cy.get("#item_tile_select_item245").click()
        cy.url()
        .should('be.equal', 'http://localhost:3000/pay_forward/245')
    })
})