// client/src/App.js

import React from "react";
import "./App.css";
import "./SuccessfulPayment.js";

function App() {
  const [data, setData] = React.useState(null);

  //TODO: Replace with our own API calls
  React.useEffect(() => {
    fetch("/test")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  
  React.useEffect(() => {
    fetch("/test_database")
      .then((res) => res.json());
  }, []);
}

export default App;
