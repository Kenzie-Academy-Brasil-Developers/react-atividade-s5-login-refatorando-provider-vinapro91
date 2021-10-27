import { Home } from "../pages/home";
import { Dashboard } from "../pages/Deshboard";
import { Switch, Route, Link } from "react-router-dom";
export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
};
