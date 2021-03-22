import React, { Component,useState } from 'react'
import './Cards.css';
import AniNav from '../Components/AniNav';
import {motion} from 'framer-motion';
import Modal from './Modal';
import LeftModal from './LeftModal';
import ImageGrid from './ImageGrid';

/**
 * 
 * 3/14/21
//  TODO Created cards for animals on animals list page
 * Added a button that will prompt information to the user about chosen animal
 * Got images from national geo website
 * Still need to make it responsive for different monitors 
 * - Joshua Grimaldo
 * 
 *  3/15/21
 //TODO Added icon to the learn more button & messed witrh the spacing of the cards
 * Created a Meet our animals greeting in animals cards 
 Still need to make it responsive for different monitors 
 * - Joshua Grimaldo
 *
 * 3/17/21
 //TODO Implemented the modal into the animal cards so now a modal should show up
 when clicking the learn more button. This will display info to the user 
 - Joshua Grimaldo
 */

 //Function that takes in a prop to create cards in animals  


// Function that will return the function we created above 
function Animals() {
  
    return (
      // empty fragment
       <>
       {/* AniNav navbar is being called here so it renders */}
         <AniNav />
          {/* Greeting that greets users when on the animal list page */}
         <motion.div className = "Greeting"
         initial={{ scale: 0 }}
         animate={{ rotate: 0, scale: 1 }}
         transition={{
           type: "spring",
           stiffness: 260,
           damping: 20
         }}
         ><h1>Meet the animals</h1></motion.div>
      

        
        <br></br>
        
        
        <ImageGrid />

        
        
        
        
          
          
        
        </>

        
    )
}


export default Animals
