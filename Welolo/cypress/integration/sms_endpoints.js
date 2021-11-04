
describe("Testing SMS API Endpoints", () => {
    it("Testing GET test endpoint", () => {
        cy.request("http://localhost:3001/test")
            .then((response) => {
                    expect(response.body).to.have.property('message', 'This endpoint is working properly!');
            })
    })

    it("Testing POST api/send_message endpoint - with +1 at beginning",()=>{
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/api/send_message',
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

    it("Testing POST api/send_message endpoint - without +1 for local numbers",()=>{
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/api/send_message',
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

    it("Testing POST api/send_message endpoint failure - incorrect length phone number",()=>{
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/api/send_message',
            form: true, 
            body: {
                recipient_name: "john",
                recipient:'+15550006',
                sender_quantity:'100',
                body:'Testing'
            },
          }).then((response) => {
            expect(response.body).to.have.property('success', false)
        })
    })

    it("Testing POST api/send_message endpoint failure - empty phone number",()=>{
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/api/send_message',
            form: true, 
            body: {
                recipient_name: "john",
                recipient:'',
                sender_quantity:'100',
                body:'Testing'
            },
          }).then((response) => {
            expect(response.body).to.have.property('success', false)
        })
    })
    
})