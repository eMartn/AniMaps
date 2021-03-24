import React, {useState} from 'react'
import '../App.css';
import './Africa.css';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Image from '../Sprites/tigerNew.png';
import Image2 from '../Sprites/camel.png';
import Modal from './Modal';
import LeftModal from './LeftModal';
import {motion} from 'framer-motion';
import {fromRightAnimation} from '../Animations';
import AniNav from '../Components/AniNav';
import Animal from './Animal';



// displays the image content 
//TODO Figure out some conditional rendering so that when we click on redPanda the fox component does not render 
//TODO https://reactjs.org/docs/conditional-rendering.html
function AfricaContents() {

  /* 
  use state for the modal to manage the value
It returns a pair of values: the current state and a function that updates it. 
  This is why we write const [show, setShow] = useState(false)
  It is false by default becuase nothing is shown initially   
  but when it is set to true it will show the modal
  Look at line 143
 For more info: https://reactjs.org/docs/hooks-state.html

 https://medium.com/tinyso/how-to-create-a-modal-component-in-react-from-basic-to-advanced-a3357a2a716a
*/
  const [show,setShow] = useState(false);


  // if(!setShow){
  //   return <Fox isShown = {false}/>;

  // }

    return (
      /*
      For now this uses the asia container css
      but will change in the future to have its own
      */
        <div class = "africa-container">
          {/* Header for africa */}
            <motion.h1
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
            }}
            > 
            
            <Link to='/SouthAmerica' className= 'to-region' >                  
                {/* Font awesome icon */}
                <i class="fas fa-chevron-left"></i>
                 </Link>
            
            Africa
            
            <Link to='/Europe' className= 'to-region'>
            <i class="fas fa-chevron-right"></i>
                 </Link>

             </motion.h1>
             &nbsp;

           

            {/*  Image for the Africa continent    */}
            {/* <Imaging> */}
            <img id = 'AsiaImg' src = "Images/Africa.jpg" alt = " " />
            
            <Animal 
             modalTitle = "AfricanElephant"
             className = "African-Elephant"
            />

            <Animal 
             modalTitle = "AfricanLion"
             className = "Lion"
            />

            <Animal 
             modalTitle = "MasaiGiraffe"
             className = "Giraffee"
            />

            <Animal 
             modalTitle = "WhiteRhinoceros"
             className = "Rhino"
            />

        </div>
    )
}

// this returns the methods above & has the animation warpped around it 
// This is rendered and is how everything in Africa is displayed
function Africa() {

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
       {/* Renders africa contents */}
        <AfricaContents />
        </motion.div>
      
    );
}

export default Africa
