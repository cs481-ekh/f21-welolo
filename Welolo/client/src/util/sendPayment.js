function sendPayment(transactionData) {
    return fetch("/api/send_payment", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: transactionData
    })
}

export { sendPayment }