describe("Testing SMS API Endpoints", () => {
    it("Testing GET test endpoint", () => {
        cy.request("http://localhost:3001/test")
            .then((response) => {
                    expect(response.body).to.have.property('message', 'This endpoint is working properly!');
            })
    })
})