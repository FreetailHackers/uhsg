import React, { useState } from "react";
import "./App.css";
import * as ReactBootStrap from "react-bootstrap";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/Home" component={Home}>
            <Home />
          </Route>
          <Route path="/Search" component={Search}>
            <Search />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
