import React from "react";

import "./success.css";
import useTime from "../../hooks/useTime";

export default function Success({ launch }) {
  const { days, hours, minutes, seconds } = useTime(launch.date_utc);

  return (
    <div className="success">
      <div className="success-container">
        <div className="success-container-launchname">
          <div className="success-container-launchname-name">
            {launch.name ? launch.name : "Name of the launch"}
          </div>
          {launch.name && (
            <div
              className="success-container-launchname-indicator"
              style={{ backgroundColor: launch.success ? "green" : "red" }}
            ></div>
          )}
        </div>
        <div className="success-container-time">
          <div className="success-container-time-watchblock">
            <div className="success-container-time-watchblock-label">
              Elapsed time since launch
            </div>
            <div className="success-container-time-watchblock-timer">
              {launch.date_utc
                ? days +
                  ":" +
                  ("0" + hours).slice(-2) +
                  ":" +
                  ("0" + minutes).slice(-2) +
                  ":" +
                  ("0" + seconds).slice(-2)
                : "00:00:00"}
            </div>
          </div>
          <span className="success-container-time-id">id:{launch.id}</span>
        </div>
      </div>
    </div>
  );
}
