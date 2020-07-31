import React from "react";
import { gql, useQuery } from "@apollo/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AddEntryForm } from "./components/molecules";
import { TableWrapper } from "./components/organisms";

function App() {
  const GET_DESSERTS = gql`
    query {
      desserts {
        title
        nutritionInfo {
          calories
          fat
          carb
          protein
        }
      }
      nutritionInfoFields: __type(name: "NutritionInfo") {
        name
        fields {
          name
        }
      }
      dessertTitle: __type(name: "Dessert") {
        name
        fields {
          name
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_DESSERTS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const {
    desserts,
    nutritionInfoFields: { fields: nutritionInfoFields },
    dessertTitle: { fields: titleFields },
  } = data;

  return (
    <Router>
      <div className="pa4 sans-serif">
        <div className="overflow-auto">
          <h1>Nutrition List</h1>
          <Route
            exact
            path="/"
            render={() => (
              <TableWrapper
                entryData={desserts}
                titleData={[titleFields[0], ...nutritionInfoFields]}
              />
            )}
          />
          <Route
            exact
            path="/add-entry"
            render={() => (
              <AddEntryForm
                titleData={[titleFields[0], ...nutritionInfoFields]}
              />
            )}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
