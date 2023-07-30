import "./launches.css";
import Launch from "../launch/Launch";
import { useQuery } from "@tanstack/react-query";
import fetchapi from "../../queries/getLaunches";

export default function Launches() {
  const { data, isLoading } = useQuery({
    queryKey: ["launches"],
    queryFn: () => fetchapi(),
  });
  console.log(data);

  return (
    <div className="launches">
      <span className="launches-heading">Past Launches</span>
      <div className="launches-parent">
        {isLoading && <h3>loading..</h3>}
        {data?.map((launch) => (
          <Launch launch={launch} key={launch.id} />
        ))}
      </div>
    </div>
  );
}
