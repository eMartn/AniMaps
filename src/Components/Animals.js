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
function Cards(props) {
        // Varibale created to take in images for the cards background 
        let bg_img = `url(${props.images})`
        // Varibale created that assigns title & decription as props
        // alternate way of doing -> EX: prop.title or props.description
        // doing it like this makes it easier to manage
        let {title, description,modalInfo,modalTitle,weight} = props

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
                
                <LeftModal title = {modalTitle} onClose = {() => setShow(false)} show = {show} >
                <p>{weight}</p>
                </LeftModal>  
                
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
        
        <motion.div>
        <ImageGrid />

        </motion.div>
        
        
        
          
          
        
        </>

        
    )
}


export default Animals
