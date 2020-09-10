import React from "react";
import Accordion from "./compenents/Accordion";
import Search from "./compenents/Search";
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
export default () => {
  return (
    <div>
      <br />
      <Search />
    </div>
  );
};
