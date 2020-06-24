import React from "react";
import ReactDOM from "react-dom";

import LoginCard from "./LoginCard";

import "./styles.css";

function App() {
  return (
    <div className="App centered column">
      <LoginCard />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
