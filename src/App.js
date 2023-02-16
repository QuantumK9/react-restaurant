import './App.css';
import {BrowserRouter as Router, Routes} from "react-router-dom"; 
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import Home from './pages/Home'
import Header from './components/Header'


import Hero from './components/Hero'

function App() {
  return (
    <Router> 
    <div className='App'><Header exact path="/" component={Home}>
    </Header></div></Router>
  );
}

export default App;
