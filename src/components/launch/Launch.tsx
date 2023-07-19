import React from "react";
import "./launch.css";

export default function Launch({launch}) {
  return <div className="launch">
    <div className="launch-name">{launch.name}</div>
    <div className="launch-id">{launch.id}</div>

  </div>;
}
