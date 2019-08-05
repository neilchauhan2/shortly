import React from "react";
import "./App.css";
import "../node_modules/bulma/css/bulma.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import UrlBox from "./components/UrlBox";
import Landing from "./components/Landing";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Landing />
        <UrlBox />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
