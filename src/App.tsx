import React, { useState } from "react";
import Accordion from "./compenents/Accordion";
import Search from "./compenents/Search";
import Dropdown from "./compenents/Dropdown";
import Transalte from "./compenents/Translate";
import Route from './compenents/Route'
import Header from './compenents/Header'
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
  const[selected,setSelected] = useState(options[0])
  return (
    <div>
      <Header/>
      <Route path="/">
        <Accordion items={items}/>
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown 
        label = "select a color"
        options={options}
        selected = {selected}
        onSelectedChange={setSelected}/>
      </Route>
      <Route path="/translate">
        <Transalte />
      </Route>
    </div>
  );
};
