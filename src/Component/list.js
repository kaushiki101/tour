import React, { useContext, useState } from "react";
import Tour from "./Tour.js";

export default function List({ people }) {
  return (
    <>
      {/* <h2>Welcome to Our Tour App</h2> */}

      <section className="tours">
        {people.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </section>
    </>
  );
}
