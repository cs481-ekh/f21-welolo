describe("Testing SMS API Endpoints", () => {
it("Testing POST api/send_message endpoint",()=>{
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/api/send_payment',
        form: true, 
        body: {
            recipient_name: "john",
            recipient:'+15005550006',
            sender_quantity:'100',
            body:'Testing'
        },
      }).then((response) => {
        expect(response.body).to.have.property('success', true)
    })
})
})