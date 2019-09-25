import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import StartForm from "./components/StartForm";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/start" component={StartForm} />
      </Switch>
    </div>
  );
};

export default Routes;
