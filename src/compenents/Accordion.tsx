import React, { useState } from "react";

interface AccordionProps {
  items: content[];
}
interface content {
  title: string;
  content: string;
}
const Accordion = ({ items }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const onTitleClick = (index: any) => {
    setActiveIndex(index);
  };
  const renderedItmes = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <div key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="ui styled accordion">
      {renderedItmes}
      {activeIndex}
    </div>
  );
};

export default Accordion;
