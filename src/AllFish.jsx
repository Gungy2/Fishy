import React, { useState, useEffect } from "react";
import Fish from "./Fish.jsx";

function AllFish() {
  const [fish, setFish] = useState([]);
  const [name, setName] = useState("");
  const [currFish, setCurrFish] = useState([]);

  useEffect(() => {
    const otherUrl =
      "https://cors-anywhere.herokuapp.com/https://www.fishwatch.gov/api/species";
    fetch(otherUrl)
      .then((response) => response.json())
      .then((data) => {
        const noDuplicates = eliminateDuplicates(data);
        setFish(noDuplicates);
        setCurrFish(noDuplicates);
      });
  }, []);

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

  return (
    <main>
      <form id="mainForm">
        <input
          type="text"
          id="fishName"
          placeholder="Find Fish"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (name !== "") {
              const filteredFish = fish.filter((fish) => {
                return fish["Species Name"]
                  .toLowerCase()
                  .includes(name.toLocaleLowerCase());
              });
              setCurrFish(filteredFish);
            } else {
              setCurrFish(fish);
            }
          }}
        />
      </form>
      {currFish.map((fish) => (
        <Fish key={fish["Scientific Name"]} species={fish} />
      ))}
    </main>
  );
}

export default AllFish;
