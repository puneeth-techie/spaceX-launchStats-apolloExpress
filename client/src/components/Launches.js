import React, { Fragment } from "react";
import { gql, useQuery } from "@apollo/client";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";
import nextId from "react-id-generator";
import LoaderUI from "./LoaderUI";

const SPACEX_LAUNCHES = gql`
  query GetAllLaunches {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(SPACEX_LAUNCHES);
  if (loading) return <LoaderUI />;
  if (error) return <p>ERROR</p>;
  return (
    <div className="container">
      <Fragment>
        <h1 className="display-4 my-3">Launches</h1>
        <MissionKey />
        <Fragment>
          {data.launches.map((launch) => (
            <LaunchItem key={nextId()} launch={launch} />
          ))}
        </Fragment>
      </Fragment>
    </div>
  );
};

export default Launches;
