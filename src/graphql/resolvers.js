import axios from "axios";

const resolvers = {
  Query: {
    /**Fetch Spcae-X mission launches...
     * @API       https://api.spacexdata.com/v3/launches
     * @access    public
     */
    launches: async () => {
      const result = await axios.get("https://api.spacexdata.com/v3/launches");
      return result.data;
    },
  },
};

export default resolvers;
