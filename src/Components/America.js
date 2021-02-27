import React, {useState} from 'react'
 import { Button } from './Button'
import '../App.css';
import './AsiaSection.css';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Image from './redPanda.png';
import Modal from './Modal';
import {motion} from 'framer-motion';
import {fromRightAnimation} from '../Animations';


const Container = styled.div`

display: flex; 
justify-content: center;
align-items: center;
height; 100vh;


`

const AltButton = styled.button`

min-width: 100px;
padding: 60px 32px;
border-radius: 4px;
border: none;
background: black;
color: white;
font-size: 24px;
cursor: pointer;
background: url(${Image}) center;
background-repeat: no-repeat;
position: absolute;
  top: 800px;
  left: 800px;
`

function AmericaContent() {
    const [showModal, setShowModal] = useState(false);
  const openModal = () =>{

    setShowModal(prev => !prev)

  }
    return (
        <div class = "asia-container">
            <h1> America</h1>

            <div className = "asia-btns">
               
                <Link to='/Australia' className= 'to-region' >   
                <i class="fas fa-arrow-left"></i>

                 </Link>

                 <Link to='/Africa' className= 'to-region'>
                <i class="fas fa-arrow-right"></i>
                 </Link>

           </div>
            {/*  Image for the Africa continent    */}
            <img id = 'AfricaImg' src = "Images/America.jpg" />
            <Container>

            <AltButton onClick = {openModal}>  </AltButton>
            <Modal showModal = {showModal} setShowModal = {setShowModal} /> 
            </Container>
            

        </div>
    )
}


function America() {

    return (
        <motion.div
        initial = 'out'
        animate = 'end'
        exit = 'out'
        variants = {fromRightAnimation}
        > 
        <AmericaContent />
        </motion.div>
    );
}

export default America;
