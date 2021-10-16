export function sendSMS(transactionData) {
  fetch("/api/send_message", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: transactionData
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        return 1
      } else {
        return 0
      }
    });
}