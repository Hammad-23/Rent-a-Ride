import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogIn from "../screens/login";
import Signup from "../screens/signUp/signUp";
import Landing from "../screens/landing";
import Sedan from "../screens/sedan/sedan";
import Hatchback from "../screens/hatchback/hatchback";
import Book from '../screens/bookNow'

export default function ReactRouter() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/about">
            
          </Route> */}
          <Route exact path="/">
            <LogIn />
          </Route>
          <Route exact path="/signup">
            <Signup/>
          </Route>
          <Route exact path="/landing">
            <Landing />
          </Route>

          <Route exact path="/sedan">
            <Sedan />
          </Route>
          <Route exact path="/hatchback">
            <Hatchback/>
          </Route>
          <Route exact path="/book">
            <Book/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
