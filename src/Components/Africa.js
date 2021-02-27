import React, {useState} from 'react'
 import { Button } from './Button'
import '../App.css';
import './AsiaSection.css';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Image from './tiger.png';
import Modal from './Modal';
import {motion} from 'framer-motion';
import {fromRightAnimation} from '../Animations';

//Styling for the container wrapper around the modal
const Container = styled.div`

display: flex; 
justify-content: center;
align-items: center;
// height: 100vh;


`

// styling for the image sprites 
const AltButton = styled.button`

width: 230px;
padding: 90px 32px;
border-radius: 4px;
border: none;
background: black;
color: white;
font-size: 24px;
cursor: pointer;
background: url(${Image}) center;
background-repeat: no-repeat;
position: absolute;
  top: 600px;
  left: 800px;

 animation: spawn 3s ease, shake 4s ease-in-out 5s infinite;
  
 // methods for the sprite animation 
  @keyframes spawn {
    // 0% {
    //   transform: translateY(-3%);
    // }
  
    // 50% {
    //   transform: translateY(12%);
    // }
  
    // 100% {
    //   transform: translateY(-2%);
    // }
    // 10%, 90% {
    //   transform: translate3d(-1px, 0, 0);
    // }
    
  
    // Animation for popping up 
    0% {
      transform: scale(0); /* scaling to 0 */
    }
    
    50% {
      transform: scale(1.1); /* increasing the size */
    }

    // 70% {
    //   transform: scale(0.65); /* decreasing the size */
    // }
    // 100% {
    //   transform: scale(0); /* seeting back to initial size */
    // }
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
// displays the image content 
function AfricaContents() {

  // to make the modal show up
    const [showModal, setShowModal] = useState(false);
  const openModal = () =>{

    setShowModal(prev => !prev)

  }
    return (
      
        <div class = "asia-container">
            <h1> Africa
            </h1>

            <div className = "asia-btns">
              {/* <h2>North America</h2> */}
                <Link to='/America' className= 'to-region' >   
                
                <i class="fas fa-arrow-left"></i>

                 </Link>

                 <Link to='/Asia' className= 'to-region'>
                <i class="fas fa-arrow-right"></i>
                 </Link>

           </div>
            {/*  Image for the Africa continent    */}
            <img id = 'AfricaImg' src = "Images/Africa.jpg" />
            <Container>

            <AltButton onClick = {openModal}>  </AltButton>
            <Modal showModal = {showModal} setShowModal = {setShowModal} /> 
            </Container>
            

        </div>
    )
}

const HideOverFlow = styled.section`

overflow: hidden;

`
// this returns the methods above & has the animation warpped around it 
function Africa() {

    return (
      <HideOverFlow>
        <motion.div
        initial = 'out'
        animate = 'end'
        exit = 'out'
        variants = {fromRightAnimation}
        > 
        <AfricaContents />
        </motion.div>
        </HideOverFlow>
    );
}

export default Africa
