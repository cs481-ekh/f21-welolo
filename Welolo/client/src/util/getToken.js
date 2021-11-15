

// This function makes a call to your server to get a transaction token
export function getToken(transactionData) {
    return fetch("/start-transaction", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: transactionData
    });
}