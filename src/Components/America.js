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

 /* 
  use state for the modal to manage the value
It returns a pair of values: the current state and a function that updates it. 
  This is why we write const [show, setShow] = useState(false)
  It is false by default becuase nothing is shown initially   
  but when it is set to true it will show the modal
  Look at line 29
 For more info: https://reactjs.org/docs/hooks-state.html
*/
function Animal(props){

  // Varibale created that assigns title & decription as props
  // alternate way of doing -> EX: prop.title or props.description
  // doing it like this makes it easier to manage
  let {className, modalInfo,modalTitle,weight} = props
  
  const [show,setShow] = useState(false);
return (
<div>
   <div className = {className} onClick = {() => setShow(true)}  ></div>
   <LeftModal title = {modalTitle} onClose = {() => setShow(false)} show = {show} >
   <p>{weight}</p>
  </LeftModal>   

  <Modal title = {modalTitle} onClose = {() => setShow(false)} show = {show} >
   <p>{modalInfo}</p>
  </Modal>     
</div>
)
}

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
            >North America</motion.h1>
            {/*
             Assigns a class name for the buttons
             again, this uses asia section and will be changed in the future
            */}

            <motion.div className = "america-btns"
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
                  <i class="fas fa-arrow-left"></i>
                </Link>

                {/* Allows us to go to South America from North America
                Link is a replacement to A tag with React Router
                */}
                <Link to='/SouthAmerica' className= 'to-region'>
                  {/* Font awesome icon */}
                  <i class="fas fa-arrow-right"></i>
                </Link>

            </motion.div>

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
             modalTitle = "Flamingo"
             modalInfo = "I am a Flamingo"
             weight = "130lbs-180lbs"
             className = "Flamingo"
            />

            <Animal 
             modalTitle = "Bee"
             modalInfo = "I am a Bee"
             weight = "130lbs-180lbs"
             className = "Bee"
            />

              <Animal 
             modalTitle = "Deer"
             modalInfo = "I am a Deer"
             weight = "130lbs-180lbs"
             className = "Deer"
            />

            <Animal 
             modalTitle = "Boar"
             modalInfo = "I am a Boar"
             weight = "130lbs-180lbs"
             className = "Boar"
            />

            <Animal 
             modalTitle = "Bear"
             modalInfo = "I am a Bear"
             weight = "130lbs-180lbs"
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
