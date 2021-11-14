import load from 'little-loader'
load("https://assets.emergepay-sandbox.chargeitpro.com/cip-hosted-modal.js")

async function sendPayment(transactionData) {
    // Initialize emergepay modal (not required, but makes things load faster)
    window.emergepay.init();

    // Get a transactionToken serverside
    var successfulToken = await getToken(transactionData)
    .then(res => res.json())
    .then(data => {
        return data.transactionToken })
    .catch(err => {
        return false
    })

    if(successfulToken) {
        console.log(successfulToken)
        // Set up and open the payment modal
        window.emergepay.open({
            
            // (required) Used to set up the modal
            transactionToken: successfulToken,
            // (optional) Callback function that gets called after a successful transaction
            onTransactionSuccess: function(approvalData) {
                console.log("Approval Data", approvalData);

                var Success  = async() => {
                    fetch("/start-transaction")
                      .then((res) => res.json());
                };

                alert(Success)

                window.emergepay.close();
                window.location = "https://www.chargeitpro.com";
            },
            // (optional) Callback function that gets called after a failure occurs during the transaction (such as a declined card)
            onTransactionFailure: function(failureData) {
                console.log("Failure Data", failureData);                
            }
        });
    }
};

// This function makes a call to your server to get a transaction token
async function getToken(transactionData) {
    const data = await fetch("/start-transaction", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: transactionData
    })
    return data;
}


// This function makes a call to endpoint to acknowledge transaction
async function sendAcknowledgement() {
    const data = await fetch("/acknowledge-transaction", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return data;
}

export { sendPayment }