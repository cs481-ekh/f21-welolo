function getMerchantData(merchantId) {
    /**
     * THIS FUNCTION MAY NEED TO CHANGE
     * DEPENDING ON APPLICATION
     * 
     * ADJUST HOWEVER YOU NEED TO,
     * AS LONG AS YOU KEEP THE FETCH
     * METHOD CALL THE SAME.
     * 
     * CALLBACK FUNCTIONS DO NOT
     * NEED TO STAY TO KEEP PROPERLY
     * REQUEST DATA
     */
    fetch("/api/merchant_data?m_id="+merchantId, {
        method: 'GET'
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
}

export { getMerchantData }