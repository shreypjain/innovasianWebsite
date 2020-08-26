import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
        <Switch>
          {/* all of the routes and the pages will go here */}
       </Switch>
    </BrowserRouter>
  )
}

export default App;
