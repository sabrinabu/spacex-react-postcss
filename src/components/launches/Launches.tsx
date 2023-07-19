import React, { useEffect, useState } from "react";
import "./launches.css";
import Launch from "../launch/Launch";
import axios from "axios";

export default function Launches() {
  const [latestLaunches, setLatestLaunches] = useState([]);
  const api = "https://api.spacexdata.com/v4/launches/past";

  const fetchapi = async () => {
    const res = await axios.get(api);
    const data = res.data.sort(function (a, b) {
      return b.date_unix - a.date_unix;
    });
    setLatestLaunches(data.slice(0, 3));
    console.log(latestLaunches);
  };

  useEffect(() => {
    fetchapi();
  }, []);

  return (
    <div className="launches">
      <span className="launches-heading">Past Launches</span>
      <div className="launches-parent">{latestLaunches.map((launch)=>(
           <Launch launch={launch}/>
      ))}
      
        
      </div>
    </div>
  );
}
