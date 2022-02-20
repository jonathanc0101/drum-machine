import React from "react";
import Button from "./Button";

import { letters } from "../constants";

export default function Buttons() {
  return (
    <div>
      {letters.map((letter, index) => (
        <Button id={letter} key={index} letter={letter}></Button>
      ))}
    </div>
  );
}
