import React, { useState, useEffect } from "react";
interface DropdownProps {
  options: {
    label: string;
    value: string;
  }[];
  onSelectedChange: Function;
  selected: {
    label: string;
    value: string;
  };
}
const Dropdown = ({ options, selected, onSelectedChange }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.addEventListener("click", () => {});
  }, []);
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select</label>

        <div
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
