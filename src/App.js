//import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Australia from './Components/Australia';
import AsiaSection from './Components/AsiaSection';


function App() {
  return (
    <>
    <Router>
    <NavBar />
    <Switch>
      <Route path= '/' exact component = {Home}/>
      <Route path= '/Australia' exact component = {Australia}/>
      <Route path= '/Asia' exact component = {AsiaSection}/>



      </Switch>
    </Router>
    
     
    </>
  );
}

export default App;
