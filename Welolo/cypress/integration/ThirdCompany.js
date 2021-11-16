describe('Third company tests', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
    
    it('Item selection with id 105', () => {
        cy.get("#merchant_tile_select_merchant25").click();
        cy.url()
        .should('be.equal', 'http://localhost:3000/view_menu/25')
        cy.get("#item_tile_select_item105").click()
        cy.url()
        .should('be.equal', 'http://localhost:3000/pay_forward/105')
        
    })

    it('Item selection with id 115', () => {
        cy.get("#merchant_tile_select_merchant25").click();
        cy.url()
        .should('be.equal', 'http://localhost:3000/view_menu/25')
        cy.get("#item_tile_select_item115").click()
        cy.url()
        .should('be.equal', 'http://localhost:3000/pay_forward/115')
    })
    it('Item selection with id 135', () => {
        cy.get("#merchant_tile_select_merchant25").click();
        cy.url()
        .should('be.equal', 'http://localhost:3000/view_menu/25')
        cy.get("#item_tile_select_item135").click()
        cy.url()
        .should('be.equal', 'http://localhost:3000/pay_forward/135')
    })
    it('Item selection with id 145', () => {
        cy.get("#merchant_tile_select_merchant25").click();
        cy.url()
        .should('be.equal', 'http://localhost:3000/view_menu/25')
        cy.get("#item_tile_select_item135").click()
        cy.url()
        .should('be.equal', 'http://localhost:3000/pay_forward/135')
    })

    it('Item selection with id 255', () => {
        cy.get("#merchant_tile_select_merchant25").click();
        cy.url()
        .should('be.equal', 'http://localhost:3000/view_menu/25')
        cy.get("#item_tile_select_item255").click()
        cy.url()
        .should('be.equal', 'http://localhost:3000/pay_forward/255')
    })
})