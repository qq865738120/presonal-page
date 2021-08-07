import React from "react";
import { Router } from "@reach/router";
import Home from "../../components/home";

const App = () => {
  return (
    <Router basepath="/app">
      <Home path="/" />
    </Router>
  );
};

export default App;
