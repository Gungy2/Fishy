import React from "react";
import { Link } from "@reach/router";

function Fish({
  species: {
    "Species Name": name,
    "Scientific Name": scName,
    "Species Illustration Photo": media,
  },
}) {
  return (
    <Link to={"/species/" + name.toLowerCase().replace(/ /g, "-")} className="fish-section">
      <h2>{name}</h2>
      <h3>{scName}</h3>
      <img className="fish-img" src={media.src} alt={media.alt} />
    </Link>
  );
}

export default Fish;
