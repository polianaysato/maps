import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { UnclusteredStates } from "./pages/Unclustered-states/Unclustered-states";
import { UnclusteredZips } from "./pages/UnclusteredZips/UnclusteredZips";
import { UnclusteredMetros } from "./pages/Unclustered/UnclusteredMetros";

export default function Routes() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={UnclusteredZips} path="/maps/cluster" />
        <Route component={UnclusteredStates} path="/maps/choropleth" />
        <Route component={UnclusteredMetros} exact path="/" />
      </Switch>
    </Router>
  );
}
