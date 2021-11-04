class InputField{

    recipientName(){
        return cy.get("#recipient_name")
    }
    recipientPhone(){
        return cy.get("#recipient")
    }
    fundQuantity(){
        return cy.get("#sender_quantity")
    }
    message(){
        return cy.get("#body")
    }
    submit(){
        return cy.get("#submit")
    }
    paymentModal() {
        return cy.get("#cip-hosted-payments-app", { timeout: 10000 })
    }
}

export default InputField