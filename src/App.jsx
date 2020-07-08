import React from "react";
import { render } from "react-dom";
import AllFish from "./AllFish.jsx";

function App() {
  return (
    <main>
      <h1 id="title">FiFish</h1>
      <AllFish />
    </main>
  );
}

render(<App />, document.getElementById("root"));
