import React, { useState, useEffect } from "react";
import Fish from "./Fish.jsx";
import Loading from "./Loading.jsx";

function AllFish() {
  const [loading, setLoading] = useState(true);
  const [fish, setFish] = useState([]);
  const [name, setName] = useState("");
  const [currFish, setCurrFish] = useState([]);
  const [minProt, setMinProt] = useState(8);

  useEffect(() => {
    const url =
      "https://cors-anywhere.herokuapp.com/https://www.fishwatch.gov/api/species";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const noDuplicates = eliminateDuplicates(data);
        setFish(noDuplicates);
        setCurrFish(noDuplicates);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setCurrFish(
      fish
        .filter((fish) =>
          fish["Species Name"].toLowerCase().includes(name.toLowerCase())
        )
        .filter((fish) => parseFloat(fish["Protein"]) > minProt)
    );
  }, [name, minProt, setName, setMinProt]);

  function eliminateDuplicates(array) {
    array.sort((first, second) =>
      first["Scientific Name"].localeCompare(second["Scientific Name"])
    );
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (
        i == 0 ||
        array[i]["Scientific Name"] != array[i - 1]["Scientific Name"]
      ) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <main id="allFish">
      <form id="mainForm">
        <input
          type="text"
          id="fishName"
          placeholder="Find Fish"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="proteinSlider">
          Min Protein Count
          <input
            type="range"
            onChange={(e) => {
              setMinProt(e.target.value);
            }}
            min="8"
            max="30"
            value={minProt}
            className="slider"
            id="proteinSlider"
          ></input>
          {minProt}g
        </label>
      </form>
      {currFish.map((fish) => (
        <Fish key={fish["Scientific Name"]} species={fish} />
      ))}
    </main>
  );
}

export default AllFish;
