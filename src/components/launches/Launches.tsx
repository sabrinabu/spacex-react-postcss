import React from "react";
import "./launches.css";
import Launch from "../launch/Launch";

export default function Launches() {
  return (
    <div className="launches">
      <span className="launches-heading">Past Launches</span>
      <div className="launches-parent">
        <Launch />
        <Launch />
        <Launch />
      </div>
    </div>
  );
}
