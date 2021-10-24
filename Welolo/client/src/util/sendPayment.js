// function sendPayment(transactionData) {
//     return fetch("/api/send_payment", {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/json'
//         },
//         body: transactionData
//     })
// }
import load from 'little-loader'
load("https://assets.emergepay-sandbox.chargeitpro.com/cip-hosted-modal.js", (err) => {
    console.log(
        "why did I get this error? "+ err
    )
})

//assets https://assets.emergepay-sandbox.chargeitpro.com/cip-hosted-modal.js


function sendPayment(transactionData) {
    console.log(this)
    let success = false
    // Initialize emergepay modal (not required, but makes things load faster)
    window.emergepay.init();

    // Set up event listener on Pay With Card button
    // Get a transactionToken serverside
    getToken(transactionData)
    .then(function(transactionToken) {
        // Set up and open the payment modal
        window.emergepay.open({
            // (required) Used to set up the modal
            transactionToken: transactionToken,
            // (optional) Callback function that gets called after a successful transaction
            onTransactionSuccess: function(approvalData) {
                console.log("Approval Data", approvalData);
                success=true;
                window.emergepay.close();
                window.location = "https://www.chargeitpro.com";
            },
            // (optional) Callback function that gets called after a failure occurs during the transaction (such as a declined card)
            onTransactionFailure: function(failureData) {
                console.log("Failure Data", failureData);
                success=false;
            }
        });
    });
    return success;
};

// This function makes a call to your server to get a transaction token
function getToken(transactionData) {
    return fetch("/api/send_payment", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: transactionData
    }).then((data)=>{
            console.log(data)
            if (data.transactionToken){
                return (data.transactionToken);
            }
            else{
                console.log('Error getting transaction token');
            }
        }).catch(err => {
            return false
        });
}
export { sendPayment }