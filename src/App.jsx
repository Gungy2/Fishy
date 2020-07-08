import React from "react";
import { render } from "react-dom";
import AllFish from "./AllFish.jsx";

function App() {

  return (
    <div id="main-div">
      <h1 id="title">FiFish</h1>
      <AllFish />
    </div>
  );
}

render(<App />, document.getElementById("root"));
