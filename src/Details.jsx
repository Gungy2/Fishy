import React, { useEffect, useState } from "react";
import Loading from "./Loading.jsx";

function Details({ name }) {
  const [fish, setFish] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [biology, setBiology] = useState(false);

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

  function removeLinks(string) {
    return string.replace(/<\/?a.*?>/g, "");
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <main id="details-main">
      <h2>{fish["Species Name"]}</h2>
      <h3>{fish["Scientific Name"]}</h3>
      <h4>
        {fish["Species Aliases"].replace(/<.*?>/g, "").replace(/,/g, " •")}
      </h4>
      <article>
        <img
          id="details-img"
          src={fish["Species Illustration Photo"].src}
          alt={fish["Species Illustration Photo"].alt}
        />
        <h5>Physical Appearance</h5>
        <hr />
        <div
          dangerouslySetInnerHTML={{
            __html: removeLinks(fish["Physical Description"]),
          }}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: fish["Color"],
          }}
        />
        <button onClick={() => {
          setBiology(!biology);
        }} onKeyUp={() => {
          setBiology(!biology);
        }}>
          <h5>Biology</h5>
        </button>
        <hr />
        <div
          style={{display: biology ? "inherit" : "none"}}
          id="details-biology"
          dangerouslySetInnerHTML={{
            __html: removeLinks(fish["Biology"]),
          }}
        />
        <div id="close"></div>
      </article>
    </main>
  );
}

export default Details;
