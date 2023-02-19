
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyNav from './components/Nav/nav';
import Home from './pages/Home';
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import Footer from "./components/Footer/Footer.jsx";
// import Slider from "./components/slider/slider"

function App() {
  return (
    <Router >
      <div>
        <MyNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/order" component={Order} />
        </Switch>
       
      </div>
      {/* <div className='App'>
      <Slider />
      </div> */}
      <div className="App">
      <Footer />
    </div>
    </Router >
  );
};

export default App;
