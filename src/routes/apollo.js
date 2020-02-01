import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    // graphQL server
    uri : "https://movieql.now.sh/"
});

export default client;