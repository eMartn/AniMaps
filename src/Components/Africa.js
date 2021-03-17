import React, {useState} from 'react'
import '../App.css';
import './AsiaSection.css';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Image from '../Sprites/tigerNew.png';
import Image2 from '../Sprites/camel.png';
import Modal from './Modal';
import {motion} from 'framer-motion';
import {fromRightAnimation} from '../Animations';
import AniNav from '../Components/AniNav';


// styling for the image sprites 
  const AltButton = styled.button`
  width: 140px;
  padding: 80px 12px;
  border: none;
  cursor: pointer;
  background: url(${Image}) center;
  background-repeat: no-repeat;
  display: flex;
  position: absolute;
    //top: 600px;
    //left: 1000px;
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
// Styling for red panda sprite, works the same as one above 
const RedPanda = styled.button`


display: flex;
width: 160px;
height: 145px;

padding: 90px 32px;
 border: none;
cursor: pointer;
background: url(${Image2}) center;
background-repeat: no-repeat;
position: absolute;
  // top: 400px;
  // left: 650px;
  top: 30vh;
  left: 30vw;
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

function Fox(){

  const [show,setShow] = useState(false);
      return (
     
      <div>
      <AltButton onClick = {() => setShow(true)}>  </AltButton>
                   
                   <Modal title = "Sample Animal" onClose = {() => setShow(false)} show = {show} >
                   <p>Sample animal text Sample animal text</p>
                   </Modal>
      </div>
   
)

}

function TheRedPanda(){

  const [show,setShow] = useState(false);
      return (
     
      <div>
      <RedPanda onClick = {() => setShow(true) } >  </RedPanda>            
            {/*
             Uses the modal component we created in the Modal.js file
            We set the title & text 
            onClose handles the closing of the modal
            Whenever it is called the show value will be false and close the modal
            */}
             <Modal title = "Raccoon" onClose = {() => setShow(false)} show = {show} >
             <p>I AM PANDA ANIMAL</p>
             </Modal>
      </div>
   
)

}


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
        <div class = "asia-container">
          {/* Header for africa */}
            <h1> Africa </h1>

            {/*
             assigns a class name for the buttons
            again this uses asia section and will be changed in the future
            */}
            <div className = "asia-btns">
              {/* <h2>North America</h2> */}
                <Link to='/SouthAmerica' className= 'to-region' >                  
                {/* Font awesome icon */}
                <i class="fas fa-arrow-left"></i>
                 </Link>

                  {/*
                   This allows us to go to Europe from Africa
                  It uses a icon below from font awesome to display the arrow you see
                  */}
                 <Link to='/Europe' className= 'to-region'>
                <i class="fas fa-arrow-right"></i>
                 </Link>
           </div>

            {/*  Image for the Africa continent    */}
            {/* <Imaging> */}
            <img id = 'AsiaImg' src = "Images/Africa.jpg" alt = " " />
            {/* </Imaging> */}
            {/*
             This is to display the red panda you see in Africa
            The onClick handles the button to update show value
            to true which will then display the modal
            */}
            {/* <RedPanda onClick = {() => setShow(true) } >  </RedPanda>             */}
            {/*
             Uses the modal component we created in the Modal.js file
            We set the title & text 
            onClose handles the closing of the modal
            Whenever it is called the show value will be false and close the modal
            */}
             {/* <Modal title = "Second Animal" onClose = {() => setShow(false)} show = {show} >
             <p>I AM THE SECOND ANIMAL TEXT</p>
             </Modal> */}
              
            {/* AKA the FOX animal sprite */}
            {/*
             Works the same way as the redPanda 
             Problem: Modal is showing the last used instance instead of individual
              Need to fiure out how to get it to show each individual case & not by last one called

             */}
           {/* <AltButton onClick = {() => setShow(true)}>  </AltButton>
                     
           <Modal title = "Sample Animal" onClose = {() => setShow(false)} show = {show} >
           <p>Sample animal text Sample animal text</p>
           </Modal>
           */}

            <Fox/>
           <TheRedPanda/>
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
