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

// styling for the image sprites 
const AltButton = styled.button`
width: 160px;
height: 145px;
padding: 60px 32px;
border: none;
background: black;
color: white;
cursor: pointer;
background: url(${Image}) center;
background-repeat: no-repeat;
position: absolute;
display: flex;
top: 50vh;
left: 52vw;
animation: spawn 3s ease, shake 4s ease-in-out 5s infinite;
 // methods for the sprite animation 
  @keyframes spawn {
    // Animation for popping up 
    0% {
      transform: scale(0); /* scaling to 0 */
    }
    50% {
      transform: scale(1.1); /* increasing the size */
    }
  }

  // Animation that makes it possible for image to "shake"
@keyframes shake{
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
`

// TODO Connect animals via links in modal
// displays content 
function AmericaContent() {
 /* 
  use state for the modal to manage the value
It returns a pair of values: the current state and a function that updates it. 
  This is why we write const [show, setShow] = useState(false)
  It is false by default becuase nothing is shown initially   
  but when it is set to true it will show the modal
  Look at line 143
 For more info: https://reactjs.org/docs/hooks-state.html
*/
  const [show,setShow] = useState(false);

    return (
      /*
      For now this uses the asia container css
      but will change in the future to have its own
      */
        <div class = "asia-container">
             {/* Header for America */}
            <h1>North America</h1>
            {/*
             assigns a class name for the buttons
            again this uses asia section and will be changed in the future
            */}
            <div className = "asia-btns">
               {/* Allows us to go to Austrlia from America
               Link is a replacement to A tag with React Router
                */}
                <Link to='/Australia' className= 'to-region' >   
                {/* Font awesome icon */}
                <i class="fas fa-arrow-left"></i>
                 </Link>

                {/* Allows us to go to Austrlia from Africa 
                Link is a replacement to A tag with React Router
                */}
                 <Link to='/Africa' className= 'to-region'>
                   {/* Font awesome icon */}
                <i class="fas fa-arrow-right"></i>
                 </Link>

           </div>
            {/*  Image for the Africa continent    */}
            <img id = 'AsiaImg' src = "Images/America.jpg" alt = " " />
         
              {/*
             This is to display the red panda you see in Africa
            The onClick handles the button to update show value
            to true which will then display the modal
            */}
            <AltButton onClick = {() => setShow(true)}>  </AltButton>
            {/*
             Uses the modal component we created in the Modal.js file
            We set the title & text 
            onClose handles the closing of the modal
            Whenever it is called the show value will be false and close the modal
            */}
            <Modal title = "Panda" onClose = {() => setShow(false)} show = {show} >
             <p>I am a panda</p>
             </Modal>
            

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
