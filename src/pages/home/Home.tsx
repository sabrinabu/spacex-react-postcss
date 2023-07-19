import React, { useEffect, useState } from "react";
import "./home.css";
import Search from "../../components/search/Search";
import Success from "../../components/success/Success";
import Launches from "../../components/launches/Launches";
import Error from "../../components/error/Error";
import axios from "axios";

export default function Home() {
  const [launch, setLaunch] = useState([]);
  const [isFetchSuccess, setIsFetchSuccess] = useState(true);
  //const [id, setId] = useState();
  const api = "https://api.spacexdata.com/v4/launches/";

  const fetchapi = async (id) => {
    try {
      const res = await axios.get(api + id);
      setLaunch(res.data);
      setIsFetchSuccess(true);
    } catch (err) {
      setIsFetchSuccess(false);
    }
  };
  console.log(isFetchSuccess);

 

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-container-search">
          <Search fetchapi={fetchapi} />
        </div>
        <div className="home-container-status">
          <span className="success-heading">Search result</span>
          {isFetchSuccess ? <Success launch={launch} /> : <Error/>}
        </div>
        <div className="home-container-pastlaunches">
          <Launches />
        </div>
      </div>
    </div>
  );
}
