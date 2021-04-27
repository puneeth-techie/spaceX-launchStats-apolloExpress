import axios from "axios";

const resolvers = {
  Query: {
    /**
     * @GET       https://api.spacexdata.com/v3/launches
     * @desc      Fetching all Space-X launches.
     * @access    public
     */
    launches: async () => {
      const result = await axios.get("https://api.spacexdata.com/v3/launches");
      return result.data;
    },

    /**
     * @GET       https://api.spacexdata.com/v3/launches/{{flight_number}}
     * @desc      Fetching Space-X launch by flight_number
     * @access    public
     */
    launch: async (_parent, args, _context, _info) => {
      const result = await axios.get(
        `https://api.spacexdata.com/v3/launches/${args.flight_number}`
      );
      return result.data;
    },
  },
};

export default resolvers;
