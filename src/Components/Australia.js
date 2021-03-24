import React, {useState}  from 'react'
import '../App.css';
import './Australia.css';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {fromLeftAnimation} from '../Animations';
import AniNav from '../Components/AniNav';
import Modal from './Modal';
import LeftModal from './LeftModal';
import Animal from './Animal';



function AustraliaContent() {
    return (
         /*
      For now this uses the asia container css
      but will change in the future to have its own
      */
        <div class = "AU-container">
            {/* Australia header */}
            <motion.h1
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
            }}
            > 
            
            {/* Allows us to go to Asia from Australia 
                Link is a replacement to A tag with React Router
                */}
                <Link to='/Asia' className= 'to-region' >   
                {/* Uses a icon from font awesome */}
                <i class="fas fa-chevron-left"></i>
                 </Link>

            Australia
            
             {/* Allows us to go to Australia to America 
                Link is a replacement to A tag with React Router
                */}
                 <Link to='/America' className= 'to-region'>
                     {/* Uses a icon from font awesome */}
                     <i class="fas fa-chevron-right"></i>
                 </Link>
            
            </motion.h1>
            &nbsp;

            {/*  Image for the Asia continent */}
            <img id = 'AsiaImg' src = "Images/Australia.jpg" alt = " "/>
            
            <Animal 
             modalTitle = "SaltWaterCrocodile"
             className = "Crocodile"
            />

            <Animal 
             modalTitle = "Kangaroo"
             className = "Kangaroo"
            />

            <Animal 
             modalTitle = "Koala"
             className = "Koala"
            />

            <Animal 

             modalTitle = "PeacockSpider"
             className = "Spider"
            />

            <Animal 
             modalTitle = "MonarchButterfly"
             className = "Butterfly"
            />

        </div>
    )
}

// function that is exporting Australia contents 
function Australia() {
   
    return (
         /*
        Wrapped in motion framer animation and uses the
        fromLeftAnimation
        To see that go to index.js in Animations folder
      */
        <motion.div
        initial = 'out'
        animate = 'end'
        exit = 'out'
        variants = {fromLeftAnimation}
        > 
        <AniNav />
          {/* Renders the Australia content function */}
        <AustraliaContent />
        </motion.div>
        
    );


}

export default Australia
