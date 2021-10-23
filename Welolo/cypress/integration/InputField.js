class InputField{

    reciepientName(){
        return cy.get("[data-cy=recipient_name]")
    }
    reciepientPhone(){
        return cy.get("[data-cy=recipient_ph]")
    }
    fundQuantity(){
        return cy.get("[data-cy=fund_quantity]")
    }
    message(){
        return cy.get("[data-cy=message]")
    }
    submit(){
        return cy.get("[data-cy=submit]")
    }
}

export default InputField