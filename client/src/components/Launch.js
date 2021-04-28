import React, { Fragment } from "react";
import { gql, useQuery } from "@apollo/client";
import classNames from "classnames";
import { useParams } from "react-router-dom";
import LoaderUI from "./LoaderUI";

const LAUNCH = gql`
  query getOneLaunch($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

const Launch = () => {
  const params = useParams();
  const id = parseInt(params.flight_number);
  const { loading, error, data } = useQuery(LAUNCH, {
    variables: { flight_number: id },
  });
  if (loading) return <LoaderUI />;
  if (error) return <p>ERROR</p>;
  return (
    <div className="container">
      <Fragment>
        <div>
          <h1 className="display-4 my-3">
            <span className="text-dark">
              Mission: {data.launch.mission_name}
            </span>
          </h1>
          <h4 className="mb-3">Launch Details</h4>
          <ul className="list-group">
            <li className="list-group-item">
              Flight Number: {data.launch.flight_number}
            </li>
            <li className="list-group-item">
              Launch Year: {data.launch.launch_year}
            </li>
            <li className="list-group-item">
              Launch Successful:{" "}
              <span
                className={classNames({
                  "text-success": data.launch.launch_success,
                  "text-danger": !data.launch.launch_success,
                })}
              >
                {data.launch.launch_success ? "Yes" : "No"}
              </span>
            </li>
          </ul>
          <h4 className="my-3">Rocket Details</h4>
          <ul className="list-group">
            <li className="list-group-item">
              Rocket ID: {data.launch.rocket.rocket_id}
            </li>
            <li className="list-group-item">
              Rocket Name: {data.launch.rocket.rocket_name}
            </li>
            <li className="list-group-item">
              Rocket: {data.launch.rocket.rocket_type}
            </li>
          </ul>
        </div>
      </Fragment>
    </div>
  );
};

export default Launch;
