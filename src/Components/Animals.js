import React, { Component,useState } from 'react'
import './Cards.css';
import AniNav from '../Components/AniNav';
import {motion} from 'framer-motion';
import Modal from './Modal';
import styled from 'styled-components';
import Image from '../Sprites/tigerNew.png';
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
function Cards(props) {
        // Varibale created to take in images for the cards background 
        let bg_img = `url(${props.images})`
        // Varibale created that assigns title & decription as props
        // alternate way of doing -> EX: prop.title or props.description
        // doing it like this makes it easier to manage
        let {title, description,modalInfo,modalTitle} = props

        const [show,setShow] = useState(false);

        return (      
          // div created for the card
            <div className = "card">
              {/* Wrapper created for the card */}
                <div className = "wrapper">
                {/* <div className = "name"></div> */}
                {/* Div created for image card & sets the image as the background */}
                <div className = "card_img" style = {{backgroundImage: bg_img}}>
                </div>
                {/* div created to hold info for the card */}
                <div className = "cardTitle">
                  {/* h1 that uses the assigned title for the card */}
                    <h1>{title}</h1>
                   {/* p that uses the assigned description for the card */}
                    <p>{description}</p>
                    {/* button that will promt the user info about the animal for the card ***NOT DONE** */}    
                     
                <button className = "buttonCard" onClick = {() => setShow(true)}> <i class="fas fa-bars"></i> Learn More </button>              
                <Modal title = {modalTitle} onClose = {() => setShow(false)} show = {show} >
                <p>{modalInfo}</p>
                </Modal>                       
                </div>
                </div>
            </div>
        )
}

// Function that will return the function we created above 
function Animals() {
  
    return (
      // empty fragment
       <>
       {/* AniNav navbar is being called here so it renders */}
         <AniNav />
          {/* Greeting that greets users when on the animal list page */}
         <div className = "Greeting"><h1>Meet the animals</h1></div>
      {/* Uses motion framer to apply the pop animation like the one we used for the button on welcome page */}
        <motion.div className = "CardContainer"        
         initial={{ scale: 0 }}
         animate={{ rotate: 0, scale: 1 }}
         transition={{
           type: "spring",
           stiffness: 260,
           damping: 20
         }}
        >
        
         {/* creates a div for a row  */}
          <div className = "row ">
            {/* uses the Cards component to create cards for these animals */}
          <Cards 
          // Sets the title to the animal in the card which is a sample animals for now 
          title = "Sample Animal 1"
          // sets the imag that will be shown on the card for the animal which iis a placeholder for now 
          images = "https://i.natgeofe.com/n/5892ed3f-0b48-4227-9900-a712811a5903/mammals-hero_2x3.jpg?w=600&h=900"
          // sets the description to the animal in the card which is a sample description for now 
          description = "I am a text 1"

          modalTitle = "FIRST"

          modalInfo = "FIRST DEC"

          />

{/* <div className = "card1Button"><button onClick = {() => setShow(true)}> Click here </button></div> */}


           {/* uses the Cards component to create cards for these animals */}
          <Cards 
         // Sets the title to the animal in the card which is a sample animals for now 
          title = "sample Animal 2"
          // sets the imag that will be shown on the card for the animal which iis a placeholder for now 
          images = "https://i.natgeofe.com/n/e1a32724-c999-4152-ad9f-ecdbf7e65399/amphibians-hero_2x3.jpg?w=600&h=900"
        // sets the description to the animal in the card which is a sample description for now 
          description = "Sample text 2"

          modalTitle = "SECOND"

          modalInfo = "SECONDDESRC"
         />

         
         {/* Same as above */}
        <Cards
        title = "sample animal 3"
        images = "https://i.natgeofe.com/n/5506954d-6e0f-444c-aa83-a24adbe874e1/reptiles-hero_2x3.jpg?w=600&h=900"
        description = "I am a text 3"
        />
        {/* Same as above */}
        <Cards   
        title = "sample animal 4"
        images = "https://i.natgeofe.com/n/ec4956e6-d21d-4ce9-a6fd-b5e26bb94ba3/koala_thumb_3x4.JPG?w=600&h=799.5"
        description = "I am a text 4"
        />
          </div>  

        </motion.div>

         {/* 
         Repeats the same process as the one above and this is to show more animal cards 
         the ones you see below are the second row of animal cards
         If we placed them above and kept going then it would be a continious row  

         */}
        <motion.div className = "CardContainer"
         initial={{ scale: 0 }}
         animate={{ rotate: 0, scale: 1 }}
         transition={{
           type: "spring",
           stiffness: 260,
           damping: 20
         }}
        >
          <div className = "row">
          <Cards 
          title = "Animal Text"
          images = "https://i.natgeofe.com/n/c138931f-bd4e-46c9-8d23-5795c2e9254f/giant-panda_thumb_3x4.JPG?w=600&h=799.5"
          description = "I am a text 1"
         />
          <Cards 
          title = "Animal text 2"
          images = "https://i.natgeofe.com/n/3659f71f-0f58-4295-954f-b0599c8a34b2/bengal-tiger_thumb_3x4.JPG?w=600&h=799.5"
          description = "I am a text 2"
          />
        <Cards
        title = "Animal text 3"
        images = "https://i.natgeofe.com/n/cdf98bdd-e48d-420e-9a95-2542e7717e33/african-elephant_02_3x4.JPG?w=600&h=799.5"
        description = "I am a text 3"
        />
        <Cards   
        title = "animal text 4"
        images = "https://i.natgeofe.com/n/9b97e60e-e8db-4961-853b-d68ba28d7629/red-fox_thumb_3x4.JPG?w=600&h=799.5"
        description = "I am a text 4"
        />
          </div>  
        </motion.div>
        </>
    )
}


export default Animals
