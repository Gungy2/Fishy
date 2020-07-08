import React from "react";

function Fish({
  species: {
    "Species Name": name,
    "Scientific Name": scName,
    "Species Illustration Photo": media,
  },
}) {
  return (
    <section className="fish-section">
      <h2>{name}</h2>
      <h3>{scName}</h3>
      <img className="fish-img" src={media.src} alt={media.alt} />
    </section>
  );
}

export default Fish;
