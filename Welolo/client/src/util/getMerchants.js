function getMerchants() {
    fetch("/api/merchants", {
        method:"GET"
    })
        .then(res => res.json) 
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
}

export { getMerchants }