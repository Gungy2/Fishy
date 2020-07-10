import React, { useEffect, useState } from "react";
import Loading from "./Loading.jsx";

function Details({ name }) {
  const [fish, setFish] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url =
      "https://cors-anywhere.herokuapp.com/https://www.fishwatch.gov/api/species/" +
      name;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setFish(data[0]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <main id="details-main">
      <h2>{fish["Species Name"]}</h2>
      <h3>{fish["Scientific Name"]}</h3>
      <h4>
        {fish["Species Aliases"].replace(/(<.*?>)/g, "").replace(/,/g, " •")}
      </h4>
      <article>
        <img
          id="details-img"
          src={fish["Species Illustration Photo"].src}
          alt={fish["Species Illustration Photo"].alt}
        />
        <h5>Physical Appearance</h5>
        <hr />
        <p dangerouslySetInnerHTML={{ __html: fish["Physical Description"] }} />
        <div id="close"></div>
      </article>
    </main>
  );
}

export default Details;
