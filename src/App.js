import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyNav from "./components/Nav/nav";
import Gallery from "./container/Gallery/Gallery";

import Home from "./pages/Home";
import Menu from "./container/Menu/BestMenu";
import Order from "./pages/Order";
import Footer from "./components/Footer/Footer.jsx";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <MyNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/gallery" component={Gallery} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
