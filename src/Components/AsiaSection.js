import React, {useEffect, useState}  from 'react'
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
import AnimalProfileDeets from './../Dbtestpage.js';
import LeftModal from './LeftModal';

function Animal(props){

  // Varibale created that assigns title & decription as props
  // alternate way of doing -> EX: prop.title or props.description
  // doing it like this makes it easier to manage
  let {className, modalInfo,modalTitle,weight, id, images} = props
  const [show,setShow] = useState(false);
return (
<div>
   <div className = {className} onClick = {() => setShow(true)}  ></div>
   <LeftModal title = {modalTitle} onClose = {() => setShow(false)} show = {show} >
   <img id = {id} src = {images} />
  </LeftModal>   

  <Modal title = {modalTitle} onClose = {() => setShow(false)} show = {show} >
   <p>{modalInfo}</p>
  </Modal>     
</div>
)}

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
            Will take you to Europe from Asia
            Link is a replacement to A tag with React Router
            */}
                <Link to='/Europe' className= 'to-region' >  
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

            
            <Animal 
             modalTitle = "Panda"
             modalInfo = "I am a panda"
             weight = "130lbs-180lbs"
             className = "Panda2"
             id = "PandaImg"
             images = "https://i.natgeofe.com/n/c138931f-bd4e-46c9-8d23-5795c2e9254f/giant-panda_thumb_3x4.JPG?w=600&h=799.5"
            />

            <Animal 
             modalTitle = "Monkey"
             modalInfo = "I am a monkey"
             weight = "130lbs-180lbs"
             className = "Monkey"
             id = "MonkeyImg"
             images = "https://i.natgeofe.com/n/5892ed3f-0b48-4227-9900-a712811a5903/mammals-hero_2x3.jpg?w=600&h=900"
            />

            <Animal 
             modalTitle = "Tiger"
             modalInfo = "I am a tiger"
             weight = "130lbs-180lbs"
             className = "Tiger"
             id = "TigerImg"
             images = "https://i.natgeofe.com/n/3659f71f-0f58-4295-954f-b0599c8a34b2/bengal-tiger_thumb_3x4.JPG?w=600&h=799.5"
            />    

            <Animal 
             modalTitle = "Goat"
             modalInfo = "I am a goat"
             weight = "130lbs-180lbs"
             className = "Goat"
             id = "GoatImg"
             images = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.d_l7H685x1G7v2zeByuYmAHaHa%26pid%3DApi&f=1"
            />    

            <Animal 
             modalTitle = "Elephant"
             modalInfo = "I am a elephant"
             weight = "130lbs-180lbs"
             className = "Elephant"
             id = "Indian-Elephant"
             images = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.xEEGNVoxNS9-5t6hVUsWbAHaLH%26pid%3DApi&f=1"
            />    


            
        </div>

        </motion.div>
    )
}

export default AsiaSection
