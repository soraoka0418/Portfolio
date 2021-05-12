import { memo } from "react";
import { Route, Switch } from "react-router";

import { Contact } from "../components/pages/Contact";
import { Home } from "../components/pages/Home";
import { Skill } from "../components/pages/Skill";


export const Router = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Contact">
        <Contact />
      </Route>
      <Route path="/Skill">
        <Skill />
      </Route>
    </Switch>
  );
});
