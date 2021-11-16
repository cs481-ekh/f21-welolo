describe('Testing all the companies', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
    it('All companies are visible', () => {
        cy.get(".merchant_tile_img_literal").should('be.visible')

    })
    it('All items are visible', () => {
        cy.get("#merchant_tile_select_merchant5").click();
        cy.url()
        .should('be.equal', 'http://localhost:3000/view_menu/5')
        cy.get(".item_tile_img_container").should('be.visible')

    })
})
