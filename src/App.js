//import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Australia from './Components/Australia';
import AsiaSection from './Components/AsiaSection';
import Welcome from './Components/Welcome';
import {AnimatePresence} from 'framer-motion';
import GlobalStyle from './globalStyles';



function App() {
  return (
    <>
    <Router>
      
      <AnimatePresence>
    <NavBar />
    <Switch>
      <Route path= '/' exact component = {Welcome}/>
      <Route path= '/Australia' exact component = {Australia}/>
      <Route path= '/Asia' exact component = {AsiaSection}/>



      </Switch>
      </AnimatePresence>
    </Router>
    
     
    </>
  );
}

export default App;
