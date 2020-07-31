const { ApolloServer, gql, MockList } = require("apollo-server-express");
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

  input NutritionInfoInput {
    calories: Int
    fat: Int
    carb: Int
    protein: Int
  }

  type Mutation {
    createDessert(title: String, input: NutritionInfoInput): Dessert
    deleteDessert(title: String): Dessert
  }
`;

let desserts = [
  {
    title: "Snickers",
    nutritionInfo: {
      calories: 437,
      fat: 18,
      carb: 63,
      protein: 4,
    },
  },
  {
    title: "Oreo",
    nutritionInfo: {
      calories: 400,
      fat: 34,
      carb: 1,
      protein: 100,
    },
  },
  {
    title: "lollipop",
    nutritionInfo: {
      calories: 53,
      fat: 444,
      carb: 4,
      protein: 43,
    },
  },
];

const resolvers = {
  Query: {
    desserts: () => desserts,
    nutritionInfo: () => desserts.nutritionInfo,
  },
  Mutation: {
    createDessert: (_, { title, input }, context) => {
      const { calories, fat, carb, protein } = input;

      const dessert = {
        title: title,
        nutritionInfo: {
          calories: calories,
          fat: fat,
          carb: carb,
          protein: protein,
        },
      };

      desserts.push(dessert);

      console.log(dessert);

      return dessert;
    },
    deleteDessert: (_, { title }, context) => {
      const deleteItem = desserts.find((element) => element.title === title);

      desserts = desserts.filter((item) => item !== deleteItem);
      return deleteItem;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  persistedQueries: true,
});

const app = express();

server.applyMiddleware({ app });

app.listen({ port: 8080 }, () =>
  console.log(`🚀 Server ready at http://localhost:8080${server.graphqlPath}`)
);
