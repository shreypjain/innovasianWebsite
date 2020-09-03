import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home"
import Contact from "./pages/contact"

import Navbar from "./components/navbar"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
        <Switch>
          {/* all of the routes and the pages will go here */}
          <Route path="/contact" component={Contact}/>
          <Route path="/"component={Home}/>
        </Switch>
    </BrowserRouter>
  )
}

export default App;
