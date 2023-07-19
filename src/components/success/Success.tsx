import React from "react";

import "./success.css";

export default function Success({ launch }) {
  return (
    <div className="success">
      <div className="success-container">
        <div className="success-container-launchname">
          <div className="success-container-launchname-name">
            {launch.name ? launch.name : "Name of the launch"}
          </div>
          <div
            className="success-container-launchname-indicator"
            style={{ backgroundColor: launch.success ? "green" : "red" }}
          ></div>
        </div>
        <div className="success-container-time">
          <div className="success-container-time-watchblock">
            <div className="success-container-time-watchblock-label">
              Elapsed time since launch
            </div>
            <div className="success-container-time-watchblock-timer">
              00:00:00
            </div>
          </div>
          <div className="success-container-time-id">id</div>
        </div>
      </div>
    </div>
  );
}
