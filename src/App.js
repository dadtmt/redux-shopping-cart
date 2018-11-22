import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CatalogContainer from "./container/CatalogContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CatalogContainer />
      </div>
    );
  }
}

export default App;
