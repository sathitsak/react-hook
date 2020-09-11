import React, { useState } from "react";
import Accordion from "./compenents/Accordion";
import Search from "./compenents/Search";
import Dropdown from "./compenents/Dropdown";
const items = [
  {
    title: "What is Life?",
    content: "Game",
  },
  {
    title: "Yeet",
    content: "NICE",
  },
];
const options = [
  {
    label: "red",
    value: "burn",
  },
  {
    label: "green",
    value: "heal",
  },
];
export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <br />
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};
