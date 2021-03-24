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
import AnimalProfileDeets from '../RenderProfile.js';
import LeftModal from './LeftModal';
import Animal from './Animal';

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

            {/* <div className = "asia-btns">  */}
            
            <motion.h1 initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
            }} > 
            
            <Link to='/Europe' className= 'to-region' >  
            <i class="fas fa-chevron-left"></i>
                 </Link>
            Asia
            
            <Link to='/Australia' className= 'to-region'>
            <i class="fas fa-chevron-right"></i>
                 </Link>
            
            </motion.h1>

            {/* </div>   */}



            {/*  Image for the Asia continent    */}
            <img id = 'AsiaImg' src = "Images/Asia.png" alt = " " />

            
            <Animal 
             modalTitle = "GiantPanda"
             modalInfo = "I am a panda"
             weight = "130lbs-180lbs"
             className = "Panda2"
             id = "PandaImg"
             //images = "https://i.natgeofe.com/n/c138931f-bd4e-46c9-8d23-5795c2e9254f/giant-panda_thumb_3x4.JPG?w=600&h=799.5"
            />

            <Animal 
             modalTitle = "RhesusMacaque"
             className = "Monkey"
            />

            <Animal 
             modalTitle = "BengalTiger"
             className = "Tiger"
            />    

            <Animal 
             modalTitle = "WildGoat"
             className = "Goat"
            />    

            <Animal 
             modalTitle = "AsianElephant"
             className = "AS-Elephant"
            />    


            
        </div>

        </motion.div>
    )
}

export default AsiaSection
