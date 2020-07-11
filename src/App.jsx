import React from "react";
import { render } from "react-dom";
import AllFish from "./AllFish.jsx";
import { Router, Link } from "@reach/router";
import Details from "./Details.jsx";

function App() {
  return (
    <div id="main-div">
      <Link to="/FiFish" id="title">
        FiFish
      </Link>
      <Router>
        <Details path="/FiFish/species/:name" />
        <AllFish path="/FiFish" />
      </Router>
      <footer>
        © George Ungureanu Vranceanu. Made with FishWatch.gov API
      </footer>
    </div>
  );
}

render(<App />, document.getElementById("root"));
