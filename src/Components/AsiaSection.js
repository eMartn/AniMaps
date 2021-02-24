import React from 'react'
 import { Button } from './Button'
import '../App.css';
import './AsiaSection.css';
import {Link} from 'react-router-dom';
import './Australia.js';
import {motion} from 'framer-motion';
import {animationOne} from '../Animations';

function AsiaSection() {
    return (
        <motion.div
            initial = "out"
            animate = "in"
            exit = "out"
            variants = {animationOne}
       >
        <div class = "asia-container">
            <h1> Asia</h1>

            <div className = "asia-btns">
                {/* Grabbing button stuff from Button class without it it wll not function  */}
            {/* <Button className = 'btns' buttonStyle = 'btn--primary'  buttonSize = 'btn--large'>   <i class="fas fa-arrow-left"></i></Button>
             <Button className = 'btns' buttonStyle = 'btn--primary'  buttonSize = 'btn--large'>   <i class="fas fa-arrow-right"></i></Button>
                */}
            
            {/* Will take you to the region of Afria */}
                <Link to='/africa' className= 'to-region' >   
                <i class="fas fa-arrow-left"></i>

                 </Link>

            {/* Will take you to the region of Australia */}

                 <Link to='/Australia' className= 'to-region'>
                <i class="fas fa-arrow-right"></i>
                 </Link>

           </div>
            {/*  Image for the Asia continent    */}
            <img id = 'AsiaImg' src = "Images/Asia.png" />
            
            

        </div>
        </motion.div>
    )
}

export default AsiaSection
