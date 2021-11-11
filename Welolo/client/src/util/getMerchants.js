function getMerchants() {
    return fetch("/api/merchants", {
        method:"GET",
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
}

export { getMerchants }