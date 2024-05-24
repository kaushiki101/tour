import { useState } from "react";
import React from "react";
import Data from "./Component/Data";
import List from "./Component/list";

function App() {
  const [tour, setTour] = useState(Data);

  const [showAlert, setShowAlert] = useState(false);
  const toggleAlert = () => {
    setShowAlert(!showAlert);
  };

  return (
    <main>
      <section className="container">
        <List people={tour} />
        <button type="button" className="btns" onClick={() => setTour([])}>
          DELETE ALL
        </button>
        <h5>{tour.length} Tours Left</h5>
      </section>
      <div>
        <button onClick={toggleAlert} className="button">
          Alert !
        </button>
        {showAlert && (
          <div className="alert">
            <span className="closebtn" onClick={toggleAlert}>
              &times;
            </span>
            You DELETE ALL Tour
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
