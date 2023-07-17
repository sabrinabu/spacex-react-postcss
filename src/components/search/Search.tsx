import React from "react";
import "./search.css";

export default function Search() {
  return (
    <div className="searchcontainer">
      <div className="searchcontainer-wrapper">
        <input
          className="searchcontainer-wrapper-input"
          type="text"
          placeholder="hello"
        />
        <button className="searchcontainer-wrapper-button">Button</button>
      </div>
    </div>
  );
}
