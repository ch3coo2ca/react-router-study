import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Nav } from "./Nav.js";
import { Home } from "./Home.js";
import { ContentA } from "./ContentA.js";
import { ContentB } from "./ContentB.js";
import { ContentC } from "./ContentC.js";
import { RouterTest } from "./RouterTest";
export const Main = () => {
  return (
    <Router>
      <div>
        <Nav />
        {/* Route */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/a/b" component={ContentB} />

          {/* /a/c 도 /a로 이동한다. */}
          <Route exact path="/a" component={ContentA} />
          <Route path="/c" component={ContentC} />
          <Route path="/route" component={RouterTest} />
          <Route component={ContentC} />
        </Switch>
      </div>
    </Router>
  );
};
