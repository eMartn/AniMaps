//import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import AniNav from './Components/AniNav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Australia from './Components/Australia';
import AsiaSection from './Components/AsiaSection';
import Africa from './Components/Africa';
import America from './Components/America';
import SouthAmerica from './Components/SouthAmerica';
import Europe from './Components/Europe';
import Welcome from './Components/Welcome';
import {AnimatePresence} from 'framer-motion';
import Animals from './Components/Animals.js';
import doesNotExist from './Components/Pages/404';

function App() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(false);

  if (loading)
      {
        return <h1>Loading...</h1>;
      }
  
  return (
    <>
    <Router>
      
      <AnimatePresence exitBeforeEnter>
    
      <Switch>
        <Route path= '/' exact component = {Welcome}/>
        <Route path= '/Australia' exact component = {Australia}/>
        <Route path= '/Asia' exact component = {AsiaSection}/>
        <Route path= '/Africa' exact component = {Africa}/>
        <Route path= '/America' exact component = {America}/>
        <Route path= '/SouthAmerica' exact component = {SouthAmerica}/>
        <Route path= '/Europe' exact component = {Europe}/>
        <Route path= '/Animal-list' exact component = {Animals}/>
        <Route path= '*' exact component = {doesNotExist}/>
      </Switch>
      {/* Footer will go here */}
      </AnimatePresence>
    </Router>    
    </>
  );
}

export default App;
