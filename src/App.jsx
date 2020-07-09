import React from "react";
import { render } from "react-dom";
import AllFish from "./AllFish.jsx";
import { Router } from "@reach/router";
import Details from './Details.jsx';

function App() {
  return (
    <div id="main-div">
      <h1 id="title">FiFish</h1>
      <Router>
        <Details path="species/:name" />
        <AllFish path="/" />
      </Router>
    </div>
  );
}

render(<App />, document.getElementById("root"));
