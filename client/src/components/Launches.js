import React from "react";
import { gql, useQuery } from "@apollo/client";

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
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  return <h1>Test</h1>;
};

export default Launches;
