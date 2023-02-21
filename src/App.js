import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyNav from "./components/Nav/nav";
import Gallery from "./container/Gallery/Gallery";
import Home from "./pages/Home";
import Menus from "./container/Menus/BestMenu";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

const App = () => (
  <div>
    <Router>
      <MyNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menus" component={Gallery} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/menu" component={Menus} />
      </Switch>
      <Footer />
    </Router>
  </div>
);

export default App;
