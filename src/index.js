import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Screens/Home";
import { Shortly } from "./Screens/Shortly";
import { Pokedex } from "./Screens/Pokedex";
import { Ravenous } from "./Screens/Ravenous";
import ScrollToTop from "./ScrollToTop";
import { Santas } from "./Screens/Santas";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/portfolio/artkampen">
          <Shortly />
        </Route>
        <Route path="/portfolio/Pokedex">
          <Pokedex />
        </Route>
        <Route path="/portfolio/Ravenous">
          <Ravenous />
        </Route>
        <Route path="/portfolio/santas">
          <Santas />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
