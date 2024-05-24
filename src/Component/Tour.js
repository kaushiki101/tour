import React, { useState } from "react";
import Data from "./Data";

export default function Tour({ image, head, content }) {
  const [items, setItems] = useState([0]);

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <>
      <article>
        <div className="single-tour">
          {items.map((item) => (
            <div key={item.id}>
              <img src={image} alt={image} className="img" />
              <h4>{head}</h4>
              <p className="tour-info">{content}</p>
              <button onClick={() => deleteItem(item.id)} className=" btn">
                Not Interested
              </button>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
