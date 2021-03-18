import React, {useState}  from 'react'
import '../App.css';
import './AsiaSection.css';
import {Link} from 'react-router-dom';
import './Australia.js';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import {upAnimation} from '../Animations';
import AniNav from '../Components/AniNav';
import Image from '../Sprites/pandaNew.svg';
import Modal from './Modal';

function Panda(){

    const [show,setShow] = useState(false);
        return (
        <div>
           <div className = "Panda2" onClick = {() => setShow(true)}></div>
          
          <Modal title = "Sample Animal" onClose = {() => setShow(false)} show = {show} >
           <p>I am a Panda</p>
          </Modal>     
        </div>
  )
  }

  function Rhino(){

    const [show,setShow] = useState(false);
        return (
        <div>
           <div className = "Monkey" onClick = {() => setShow(true)}></div>
          
          <Modal title = "Sample Animal" onClose = {() => setShow(false)} show = {show} >
           <p>I am a monkey</p>
          </Modal>     
        </div>
  )
  }

  function Tiger(){

    const [show,setShow] = useState(false);
        return (
        <div>
           <div className = "Tiger" onClick = {() => setShow(true)}></div>
          
          <Modal title = "Sample Animal" onClose = {() => setShow(false)} show = {show} >
           <p>I am a tiger</p>
          </Modal>     
        </div>
  )
  }

  function Goat(){

    const [show,setShow] = useState(false);
        return (
        <div>
           <div className = "Goat" onClick = {() => setShow(true)}></div>
          
          <Modal title = "Sample Animal" onClose = {() => setShow(false)} show = {show} >
           <p>I am a Goat</p>
          </Modal>     
        </div>
  )
  }

  function Elephant(){

    const [show,setShow] = useState(false);
        return (
        <div>
           <div className = "Elephant" onClick = {() => setShow(true)}></div>
          
          <Modal title = "Sample Animal" onClose = {() => setShow(false)} show = {show} >
           <p>I am a Elephant</p>
          </Modal>     
        </div>
  )
  }


function AsiaSection() {
    return (
         /*
        Wrapped in motion framer animation and uses the
        upAnimation
        To see that go to index.js in Animations folder
      */
        <motion.div
            initial = "out"
            animate = "end"
            exit = "out"
            variants = {upAnimation}
       >
           <AniNav />
           {/* Creates a class for a container for styling in AsiaSection.css */}
        <div class = "asia-container">
            {/* Asia header */}
            
            <motion.h1 initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
            }}> Asia</motion.h1>
             {/* Creates a class for buttons for styling in AsiaSection.css */}
            <motion.div className = "asia-btns" initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
            }}>      
            {/* 
            Will take you to the region of Africa 
            Link is a replacement to A tag with React Router
            */}
                <Link to='/Africa' className= 'to-region' >  
                {/* <div className = "text">hi</div>  */}
                <i class="fas fa-arrow-left"></i>
                {/* <span class="tooltiptext">Africa</span> */}
                 </Link>
                
            

            {/* Will take you to the region of Australia 
            Link is a replacement to A tag with React Router
            */}

                 <Link to='/Australia' className= 'to-region'>
                <i class="fas fa-arrow-right"></i>
                 </Link>

           </motion.div>
            {/*  Image for the Asia continent    */}
            <img id = 'AsiaImg' src = "Images/Asia.png" alt = " " />

            <Panda />
            <Rhino />
            <Tiger />
            <Goat />
            <Elephant/>
            
        </div>

        </motion.div>
    )
}

export default AsiaSection
