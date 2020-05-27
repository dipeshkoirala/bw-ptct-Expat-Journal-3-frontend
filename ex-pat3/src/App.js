import React from "react";
import Logon from "./kcomponent/Logon";
import Home from "./kcomponent/home";
import About from "./kcomponent/about";
import Contact from "./kcomponent/about";
// import Logon from "../kcomponent/Logon";
// import logo from "./logo.svg";

// import MyCompo from "./kcomponent/things";

import Navigation from "./kcomponent/nav";
// import Protected from "./kcomponent/protected";
import { Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/">
        <Logon />
      </Route>
    </div>
  );
}

export default App;

// <Switch>
//   <Route path="/about">
//     <Protected cmp={About} />
//   </Route>
//   <Route path="/contact">
//     {/* <Contact /> */}
//     <Protected cmp={Contact} />
//   </Route>
//   <Route path="/home">
//     <Protected cmp={Home} />
//     <Home />
//   </Route>
//   <Route path="/">
//
//   </Route>
// </Switch>
// <Logon />
