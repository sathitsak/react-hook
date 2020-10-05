import React, { useState } from "react";
import Accordion from "./compenents/Accordion";
import Search from "./compenents/Search";
import Dropdown from "./compenents/Dropdown";
import Transalte from "./compenents/Translate";
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
  return (
    <div>
      <Transalte />
    </div>
  );
};
