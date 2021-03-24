import React, {useState} from 'react'
import '../App.css';
import './Europe.css';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
// import Image from '../Sprites/crow.jpg';
import Modal from './Modal';
import {motion} from 'framer-motion';
import {fromRightAnimation} from '../Animations';
import AniNav from '../Components/AniNav';
import LeftModal from './LeftModal';
import Animal from './Animal';

// styling for the image sprites 

/*
3/18/21
//TODO Created animals in Europe & gave it its own CSS 
-Joshua Grimaldo
*/
 /* 
  use state for the modal to manage the value
  It returns a pair of values: the current state and a function that updates it. 
  This is why we write const [show, setShow] = useState(false)
  It is false by default becuase nothing is shown initially   
  but when it is set to true it will show the modal
  Look at line 143
 For more info: https://reactjs.org/docs/hooks-state.html
*/


// TODO Connect animals via links in modal
// displays content 
function EuropeContent() {
 
    return (
        /*
          For now this uses the asia container css
          but will change in the future to have its own
        */
        <div class = "europe-container">
             {/* Header for South America */}
            <motion.h1
            
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
            }}>
              
              <Link to='/Africa' className= 'to-region' >   
                {/* Font awesome icon */}
                <i class="fas fa-chevron-left"></i>
                 </Link>
                 
              Europe
              

              <Link to='/Asia' className= 'to-region'>
                   {/* Font awesome icon */}
                   <i class="fas fa-chevron-right"></i>
                 </Link>
               
                 
              </motion.h1>
              &nbsp;
              
           
            {/*  Image for the South America continent    */}
            <img id = 'AsiaImg' src = "Images/Europe.jpg" alt = " " />
         
                 
            <Animal 
             modalTitle = "EuropeanTreeFrog"
             className = "Frog"

            />

            <Animal 
             modalTitle = "CarrionCrow"
             className = "Crow"
            />

            <Animal 
             modalTitle = "EurasianMoose"
             className = "Moose"
            />

            <Animal 
             modalTitle = "EurasianBrownBear"
             className = "Bear"
            />
        

         

        </div>
    )
}

// this returns the methods above & has the animation warpped around it 
// This is rendered and is how everything in America is displayed
function Europe() {

    return (
      /*
        Wrapped in motion framer animation and uses the
        fromRightAnimation
        To see that go to index.js in Animations folder
      */
        <motion.div
          initial = 'out'
          animate = 'end'
          exit = 'out'
          variants = {fromRightAnimation}
        > 
        <AniNav />
        {/* Renders the South America content function */}
        <EuropeContent />
        </motion.div>
    );
}

export default Europe;
