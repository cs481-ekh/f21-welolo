// client/src/SuccessfulPayment.js

import React from "react";

function SuccessfulPayment() {
  const [data, setData] = React.useState(null);

  //TODO: Replace with our own API calls
  React.useEffect(() => {
    fetch("/payment_successful")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  if(data === "success"){
      return (
        <div className="successfulPayment">
            <h1>
                The Payment was successful
            </h1>
        </div>
      );
  } else {
      return (
        <div className="unsuccessfulPayment">
            <h1>
                Some logic is wrong here. 
            </h1>
        </div>
      )
  }
}

export default SuccessfulPayment;
