import { gql } from "apollo-server-express";

/** typeDefs */
const typeDefs = gql`
  type RocketType {
    rocket_id: String
    rocket_name: String
    rocket_type: String
  }

  type LaunchType {
    flight_number: Int
    mission_name: String
    launch_year: String
    launch_date_local: String
    launch_success: Boolean
    rocket: RocketType
  }

  type Query {
    launches: [LaunchType]
    launch(flight_number: Int): LaunchType
  }
`;

export default typeDefs;
