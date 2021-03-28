import React from "react";
import Header from "./components/Header/Header.js";
import Tabs from "./components/Tabs/Tabs.js";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Tabs />
      </Router>
    </>
  );
}

export default App;
