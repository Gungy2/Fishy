import React, { useEffect, useState } from "react";
import Loading from "./Loading.jsx";
import { Link } from "@reach/router";

function Details({ name }) {
  const [fish, setFish] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [appearance, setAppearance] = useState(true);
  const [color, setColor] = useState(false);
  const [biology, setBiology] = useState(false);
  const [location, setLocation] = useState(false);
  const [food, setFood] = useState(false);
  const [nutrition, setNutrition] = useState(false);
  const [gallery, setGallery] = useState(false);

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
    if (string) {
      return string.replace(/<\/?a.*?>/g, "");
    }
    return "";
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <main id="details-main">
      <div id="back-container">
        <Link id="back" to="/">
          &lt;Back
        </Link>
      </div>

      <h2>{fish["Species Name"]}</h2>
      <h3>{fish["Scientific Name"]}</h3>
      <h4>
        {fish["Species Aliases"]
          ? fish["Species Aliases"].replace(/<.*?>/g, "").replace(/,/g, " •")
          : ""}
      </h4>
      <article>
        <img
          id="details-img"
          src={fish["Species Illustration Photo"].src}
          alt={fish["Species Illustration Photo"].alt}
        />

        <button
          onClick={() => {
            setAppearance(!appearance);
          }}
          onKeyUp={() => {
            setAppearance(!appearance);
          }}
        >
          <h5>Physical Appearance</h5>
        </button>
        <hr />
        <div
          style={{ display: appearance ? "inherit" : "none" }}
          dangerouslySetInnerHTML={{
            __html: removeLinks(fish["Physical Description"]),
          }}
        />

        <button
          onClick={() => {
            setColor(!color);
          }}
          onKeyUp={() => {
            setColor(!color);
          }}
        >
          <h5>Color</h5>
        </button>
        <hr />
        <div
          style={{ display: color ? "inherit" : "none" }}
          dangerouslySetInnerHTML={{
            __html: fish["Color"],
          }}
        />

        <button
          onClick={() => {
            setBiology(!biology);
          }}
          onKeyUp={() => {
            setBiology(!biology);
          }}
        >
          <h5>Biology</h5>
        </button>
        <hr />
        <div
          style={{ display: biology ? "inherit" : "none" }}
          dangerouslySetInnerHTML={{
            __html: removeLinks(fish["Biology"]),
          }}
        />

        <button
          onClick={() => {
            setLocation(!location);
          }}
          onKeyUp={() => {
            setLocation(!location);
          }}
        >
          <h5>Location</h5>
        </button>
        <hr />
        <div
          style={{ display: location ? "inherit" : "none" }}
          dangerouslySetInnerHTML={{
            __html: removeLinks(fish["Location"]),
          }}
        />

        <button
          onClick={() => {
            setFood(!food);
          }}
          onKeyUp={() => {
            setFood(!food);
          }}
        >
          <h5>Food</h5>
        </button>
        <hr />
        <div style={{ display: food ? "inherit" : "none" }}>
          <ul id="details-food">
            <li>Taste: {fish["Taste"].replace(/<.*?>/g, "")}</li>
            <li>Texture: {fish["Texture"].replace(/<.*?>/g, "")}</li>
            <li>Health Benefits: {fish["Health Benefits"].replace(/<.*?>/g, "")}</li>
          </ul>
        </div>

        <button
          onClick={() => {
            setNutrition(!nutrition);
          }}
          onKeyUp={() => {
            setNutrition(!nutrition);
          }}
        >
          <h5>Nutritional Information</h5>
        </button>
        <hr />
        <div style={{ display: nutrition ? "inherit" : "none" }}>
          <ul id="details-nutrition">
            <li>Calories: {fish["Calories"] || "0"} kcal</li>
            <li>Carbohydrate: {fish["Carbohydrate"] || "0 g"}</li>
            <li>Cholesterol: {fish["Cholesterol"] || "0 g"}</li>
            <li>Fat: {fish["Fat, Total"] || "0 g"}</li>
            <li>Fiber: {fish["Fiber, Total Dietary"] || "0 g"}</li>
            <li>Protein: {fish["Protein"] || "0 g"}</li>
            <li>
              Saturated Fatty Acids:{" "}
              {fish["Saturated Fatty Acids, Total"] || "0 g"}
            </li>
            <li>Sugars: {fish["Sugars, Total"] || "0 g"}</li>
          </ul>
        </div>

        <button
          onClick={() => {
            setGallery(!gallery);
          }}
          onKeyUp={() => {
            setGallery(!gallery);
          }}
        >
          <h5>Gallery</h5>
        </button>
        <hr />
        <div style={{ display: gallery ? "inherit" : "none" }}>
          {fish["Image Gallery"].map((image) => (
            <figure className="details-gallery" key={image.src}>
              <img src={image.src} alt={image.alt} />
              <figcaption>{image.title || image.alt}</figcaption>
            </figure>
          ))}
        </div>

        <div id="close"></div>
      </article>
    </main>
  );
}

export default Details;
