import React from "react";
import { render } from "react-dom";
import AllFish from "./AllFish.jsx";
import { Router, Link } from "@reach/router";
import Details from "./Details.jsx";
import NotFound from "./NotFound.jsx";

function App() {
  return (
    <div id="main-div">
      <Link to="/FiFish/" id="title">
        FiFish
      </Link>
      <Router basepath="FiFish">
        <Details path="/species/:name" />
        <AllFish path="/" />
        <NotFound default />
      </Router>
      <footer>© George Ungureanu Vranceanu. Made with FishWatch.gov API</footer>
    </div>
  );
}

render(<App />, document.getElementById("root"));
