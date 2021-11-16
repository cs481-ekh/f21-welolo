describe('Fourth company tests', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })

    it('Item selection with id 155', () => {
        cy.get("#merchant_tile_select_merchant35").click();
        cy.url()
        .should('be.equal', 'http://localhost:3000/view_menu/35')
        cy.get("#item_tile_select_item155").click()
        cy.url()
        .should('be.equal', 'http://localhost:3000/pay_forward/155')
    })

    it('Item selection with id 165', () => {
        cy.get("#merchant_tile_select_merchant35").click();
        cy.url()
        .should('be.equal', 'http://localhost:3000/view_menu/35')
        cy.get("#item_tile_select_item165").click()
        cy.url()
        .should('be.equal', 'http://localhost:3000/pay_forward/165')
    })
    it('Item selection with id 175', () => {
        cy.get("#merchant_tile_select_merchant35").click();
        cy.url()
        .should('be.equal', 'http://localhost:3000/view_menu/35')
        cy.get("#item_tile_select_item175").click()
        cy.url()
        .should('be.equal', 'http://localhost:3000/pay_forward/175')
    })
    it('Item selection with id 185', () => {
        cy.get("#merchant_tile_select_merchant35").click();
        cy.url()
        .should('be.equal', 'http://localhost:3000/view_menu/35')
        cy.get("#item_tile_select_item185").click()
        cy.url()
        .should('be.equal', 'http://localhost:3000/pay_forward/185')
    })
    it('Item selection with id 195', () => {
        cy.get("#merchant_tile_select_merchant35").click();
        cy.url()
        .should('be.equal', 'http://localhost:3000/view_menu/35')
        cy.get("#item_tile_select_item195").click()
        cy.url()
        .should('be.equal', 'http://localhost:3000/pay_forward/195')
    })
})