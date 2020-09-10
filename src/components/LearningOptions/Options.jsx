import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    { text: "LED", handler: () => {}, id: 1 },
    { text: "FULL HD", handler: () => {}, id: 2 },
    { text: "4K", handler: () => {}, id: 3 },
    { text: "TELA GIGANTE", handler: () => {}, id: 4 },
    { text: "SMART TV", handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="options-container">{optionsMarkup}</div>;
};

export default Options;