describe('First company tests', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })

    it('Item selection with id 5', () => {
        cy.get("#merchant_tile_select_merchant5").click();
        cy.url()
        .should('be.equal', 'http://localhost:3000/view_menu/5')
        cy.get("#item_tile_select_item5").click()
        cy.url()
        .should('be.equal', 'http://localhost:3000/pay_forward/5')
    })
    it('Item selection with id 15', () => {
        cy.get("#merchant_tile_select_merchant5").click();
        cy.url()
        .should('be.equal', 'http://localhost:3000/view_menu/5')
        cy.get("#item_tile_select_item15").click()
        cy.url()
        .should('be.equal', 'http://localhost:3000/pay_forward/15')
    })
    it('Item selection with id 25', () => {
        cy.get("#merchant_tile_select_merchant5").click();
        cy.url()
        .should('be.equal', 'http://localhost:3000/view_menu/5')
        cy.get("#item_tile_select_item25").click()
        cy.url()
        .should('be.equal', 'http://localhost:3000/pay_forward/25')
    })
    it('Item selection with id 35', () => {
        cy.get("#merchant_tile_select_merchant5").click();
        cy.url()
        .should('be.equal', 'http://localhost:3000/view_menu/5')
        cy.get("#item_tile_select_item35").click()
        cy.url()
        .should('be.equal', 'http://localhost:3000/pay_forward/35')
    })
    it('Item selection with id 45', () => {
        cy.get("#merchant_tile_select_merchant5").click();
        cy.url()
        .should('be.equal', 'http://localhost:3000/view_menu/5')
        cy.get("#item_tile_select_item45").click()
        cy.url()
        .should('be.equal', 'http://localhost:3000/pay_forward/45')
    })
})