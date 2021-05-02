import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LogIn from '../screens/login'
import Landing from '../screens/landing'

export default function ReactRouter() {
  return (
    <Router>
      <div>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            
          </Route>
          <Route path="/login">
          <LogIn />
          </Route>
          <Route path="/">
           <Landing/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}