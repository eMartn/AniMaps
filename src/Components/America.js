import React, {useState} from 'react'
import '../App.css';
import './America.css';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Image from '../Sprites/elephantSprite.png';
import Modal from './Modal';
import {motion} from 'framer-motion';
import {fromRightAnimation} from '../Animations';
import AniNav from '../Components/AniNav';
import LeftModal from './LeftModal';
import Animal from './Animal';

// TODO Connect animals via links in modal
// displays content 
function AmericaContent() {

    return (
      /*
      For now this uses the asia container css
      but will change in the future to have its own
      */
        <div class = "america-container">
             {/* Header for America */}
            <motion.h1
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
            }}
            >
              
              {/* Allows us to go to Austrlia from America
               Link is a replacement to A tag with React Router
                */}
                <Link to='/Australia' className= 'to-region' >   
                  {/* Font awesome icon */}
                  <i class="fas fa-chevron-left"></i>
                </Link>

              North America
              
                {/* Allows us to go to South America from North America
                Link is a replacement to A tag with React Router
                */}
                <Link to='/SouthAmerica' className= 'to-region'>
                  {/* Font awesome icon */}
                  <i class="fas fa-chevron-right"></i>
                </Link>
              
              </motion.h1>
              &nbsp;
            
            {/*  Image for the North America continent    */}
            <img id = 'AsiaImg' src = "Images/America.jpg" alt = " " />
         
              {/*
             This is to display the red panda you see in Africa
            The onClick handles the button to update show value
            to true which will then display the modal
            */}
            {/*
             Uses the modal component we created in the Modal.js file
            We set the title & text 
            onClose handles the closing of the modal
            Whenever it is called the show value will be false and close the modal
            */}
           
                      
           

           <Animal 
             modalTitle = "AmericanFlamingo"
             className = "Flamingo"
            />

            <Animal 
             modalTitle = "CommonEasternBumbleBee"
             className = "Bee"
            />

              <Animal 
             modalTitle = "WhiteTailedDeer"
             className = "Deer"
            />

            <Animal 
             modalTitle = "WildBoar"
             className = "Boar"
            />

            <Animal 
             modalTitle = "GrizzlyBear"
             className = "AltBear"
            />
            

            

        </div>
    )
}

// this returns the methods above & has the animation warpped around it 
// This is rendered and is how everything in America is displayed
function America() {

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
        {/* Renders the America content function */}
        <AmericaContent />
        </motion.div>
    );
}

export default America;
