function sendPayment(transactionData) {
    fetch("/api/send_payment", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: transactionData
    })
        .then(res => res.json())
        .then(data => {
            return data.success;
        })
}

export { sendPayment }