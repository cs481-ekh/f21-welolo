describe('Second company tests', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
   it('Item selection with id 55', () => {
        cy.get("#merchant_tile_select_merchant15").click();
        cy.url()
        .should('be.equal', 'http://localhost:3000/view_menu/15')
        cy.get("#item_tile_select_item55").click()
        cy.url()
        .should('be.equal', 'http://localhost:3000/pay_forward/55')
        
    })
    it('Item selection with id 65', () => {
        cy.get("#merchant_tile_select_merchant15").click();
        cy.url()
        .should('be.equal', 'http://localhost:3000/view_menu/15')
        cy.get("#item_tile_select_item65").click()
        cy.url()
        .should('be.equal', 'http://localhost:3000/pay_forward/65')
    })
    it('Item selection with id 75', () => {
        cy.get("#merchant_tile_select_merchant15").click();
        cy.url()
        .should('be.equal', 'http://localhost:3000/view_menu/15')
        cy.get("#item_tile_select_item75").click()
        cy.url()
        .should('be.equal', 'http://localhost:3000/pay_forward/75')
    })
    it('Item selection with id 85', () => {
        cy.get("#merchant_tile_select_merchant15").click();
        cy.url()
        .should('be.equal', 'http://localhost:3000/view_menu/15')
        cy.get("#item_tile_select_item85").click()
        cy.url()
        .should('be.equal', 'http://localhost:3000/pay_forward/85')
    })
    it('Item selection with id 95', () => {
        cy.get("#merchant_tile_select_merchant15").click();
        cy.url()
        .should('be.equal', 'http://localhost:3000/view_menu/15')
        cy.get("#item_tile_select_item95").click()
        cy.url()
        .should('be.equal', 'http://localhost:3000/pay_forward/95')
    })
})
   
