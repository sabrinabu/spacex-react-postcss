import React, { useState } from "react";
import "./search.css";

export default function Search({ fetchapi }) {
  const [searchId, setSearchId] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    fetchapi(searchId);
    setSearchId("");
  };
  return (
    <div className="searchcontainer">
      <div className="searchcontainer-wrapper">
        <input
          className="searchcontainer-wrapper-input"
          type="text"
          value={searchId}
          placeholder="Searchbar"
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button
          className="searchcontainer-wrapper-button"
          onClick={(e) => handleClick(e)}
        >
          Button
        </button>
      </div>
    </div>
  );
}
