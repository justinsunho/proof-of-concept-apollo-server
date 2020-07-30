const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Dessert {
    title: String
    nutritionInfo: NutritionInfo
  }

  type NutritionInfo {
    calories: Int
    fat: Int
    carb: Int
    protein: Int
  }

  type Query {
    desserts: [Dessert]
    nutritionInfo: [NutritionInfo]
  }
`;

const desserts = [
  {
    title: "Snickers",
    nutritionInfo: {
      calories: 437,
      fat: 18,
      carb: 63,
      protein: 4,
    },
  },
];

const resolvers = {
  Query: {
    desserts: () => desserts,
    nutritionInfo: () => desserts.nutritionInfo,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
