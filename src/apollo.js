import ApolloClient from "apollo-boost";

const uri = process.env.REACT_APP_API_ENDPOINT || "http://127.0.0.1:4000";

export default new ApolloClient({
  uri
});
