import React, { useContext } from "react";
import { Number } from "./App";

const Reveal = () => {
  let number = useContext(Number)[0];

  return (
    <>
      <h2>{number}</h2>
    </>
  );
};

export default Reveal;
