import React from "react";
import { Table } from "./components/molecules";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div class="pa4">
        <div class="overflow-auto">
          <h1>Nutrition List</h1>
          <Route exact path="/" component={Table} />
          <Route exact path="/add" component={Table} />
        </div>
      </div>
    </Router>
  );
}

export default App;
