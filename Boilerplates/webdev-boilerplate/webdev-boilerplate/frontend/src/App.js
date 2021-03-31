import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home';
import NavigationBar from './NavigationBar/NavigationBar';
import Pokemon from './Pokemon/Pokemon';

function App() {
  return (
    <NavigationBar />
  );
}

export default App;
