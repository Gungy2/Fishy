import React, { useState, useEffect } from "react";
import Fish from "./Fish.jsx";

function AllFish() {
  const [fish, setFish] = useState([]);

  useEffect(() => {
    const otherUrl =
      "https://cors-anywhere.herokuapp.com/https://www.fishwatch.gov/api/species";
    fetch(otherUrl)
      .then((response) => response.json())
      .then(setFish);
  }, []);

  return (
    <main>
      {fish.map((fish, i) => (
        <Fish key={i} species={fish} />
      ))}
    </main>
  );
}

export default AllFish;
