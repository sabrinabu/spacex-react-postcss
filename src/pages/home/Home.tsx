import React from "react";
import "./home.css";
import Search from "../../components/search/Search";
import Success from "../../components/success/Success";
import Launches from "../../components/launches/Launches";
import Error from "../../components/error/Error";

export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-container-search">
          <Search />
        </div>
        <div className="home-container-status">
          <span className="success-heading">Search result</span>
          <Success />
        </div>
        <div className="home-container-pastlaunches">
          <Launches />
        </div>
      </div>
    </div>
  );
}
