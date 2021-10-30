// client/src/App.js

import React from "react";
<<<<<<< HEAD
import "./App.css";
import "./SuccessfulPayment.js";
=======
import "./styles/App.css";
import SuccessfulPayment from "SuccessfulPayment";
>>>>>>> 206e1bf6da0dd7a975877ccee61194f573e598dd

function App() {
  const [data, setData] = React.useState(null);

  //TODO: Replace with our own API calls
  React.useEffect(() => {
    fetch("/test")
      .then((res) => res.json())
      .then((data) => setData(data.message));
      console.log(data);
  }, []);
  
  React.useEffect(() => {
    fetch("/test_database")
      .then((res) => res.json());
  }, []);
}

export default App;
