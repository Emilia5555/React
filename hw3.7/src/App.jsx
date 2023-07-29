import React, { useState, createContext } from "react";
import Reveal from "./Reveal";

export const Number = createContext();

const App = () => {
  const [num, setNum] = useState(Math.floor(Math.random() * 11));
  let [click, setClick] = useState(false);
  let input;
  let [message, setMessage] = useState("");
  function handleClick() {
    setClick(true);

    if (input == num) {
      setMessage("Correct!");
    } else {
      setMessage("Incorrect :(");
    }
  }

  return (
    <>
      <h2>guess number (0-10)</h2>
      <input
        type="number"
        onChange={(e) => {
          input = e.target.value;
        }}
      />
      <button onClick={handleClick}>reveal</button>
      <Number.Provider value={[num, setNum, handleClick]}>
        {click === true ? <Reveal /> : console.log("")}
      </Number.Provider>
      <h1>{message}</h1>
    </>
  );
};

export default App;
