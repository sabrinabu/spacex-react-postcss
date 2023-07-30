import axios from "axios";

const api = "https://api.spacexdata.com/v4/launches/past";

const fetchapi = async () => {
  const res = await axios.get(api);
  const data = res.data.sort(function (a, b) {
    return b.date_unix - a.date_unix;
  });
 // console.log(data);
  return data.slice(0, 3);
};


export default fetchapi;
