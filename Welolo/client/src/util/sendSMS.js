function sendSMS(transactionData) {
  return fetch("/api/send_message", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: transactionData
  })
}

export { sendSMS }