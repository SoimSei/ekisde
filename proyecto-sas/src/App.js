import React from "react";

import Nav from "./components/Nav";
import Lista from "./components/Lista";
import Login from "./components/Login";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <Login />
      <Lista />
    </div>
  );
}

export default App;
