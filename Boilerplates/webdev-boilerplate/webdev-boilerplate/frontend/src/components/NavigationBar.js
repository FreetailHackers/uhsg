import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PokemonSearch from './PokemonSearch';
import Home from './Home';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Pokemon from './Pokemon';

function NavigationBar() {

  return (
    <Router>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Simple Tutorial</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/search">Search</Link></Nav.Link>
          </Nav>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/search">
            <PokemonSearch />
          </Route>
          <Route path="/pokemon">
            <Pokemon />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default NavigationBar;
