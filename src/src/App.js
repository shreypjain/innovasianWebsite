import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home"
import Contact from "./pages/contact"
import About from "./pages/about"
import Sponsor from "./pages/sponsor"

import Navbar from "./components/navbar"

function App() {
  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>
      <Navbar/>
          <Switch>
            {/* all of the routes and the pages will go here */}
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
            <Route path="/sponsor" component={Sponsor}/>
            <Route path="/"component={Home}/>
          </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
