import React, {useState} from 'react'
import '../App.css';
import './SouthAmerica.css';
import {Link} from 'react-router-dom';
import Modal from './Modal';
import {motion} from 'framer-motion';
import {fromRightAnimation} from '../Animations';
import AniNav from '../Components/AniNav';
import LeftModal from './LeftModal';
import Animal from './Animal';



// TODO Connect animals via links in modal
// displays content 
function SouthAmericaContent() {
 

    return (
        /*
          For now this uses the asia container css
          but will change in the future to have its own
        */
        <div class = "SA-container">
             {/* Header for South America */}
            <motion.h1
             initial={{ scale: 0 }}
             animate={{ rotate: 0, scale: 1 }}
             transition={{
             type: "spring",
             stiffness: 260,
             damping: 20
             }}>
               {/* Allows us to go to North America from South America
                   Link is a replacement to A tag with React Router*/}
                <Link to='/America' className= 'to-region' >   
                {/* Font awesome icon */}
                <i class="fas fa-chevron-left"></i>
                 </Link>

               South America
               
                 {/* Allows us to go to Africa from South America 
                    Link is a replacement to A tag with React Router
                */}
                 <Link to='/Africa' className= 'to-region'>
                   {/* Font awesome icon */}
                   <i class="fas fa-chevron-right"></i>
                 </Link>
               </motion.h1>
           
               &nbsp;
            {/*  Image for the South America continent    */}
            <img id = 'AsiaImg' src = "Images/SouthAmerica.png" alt = " " />
            
             <Animal 
             modalTitle = "Toucan"
             modalInfo = "I am a toucan"
             weight = "130lbs-180lbs"
             className = "Toucan"
            />

            <Animal 
             modalTitle = "Southern Three-Banded Armadillo"
             modalInfo = "I am an armadillo"
             weight = "130lbs-180lbs"
             className = "Southern-three-banded-armadillo"
            />

            <Animal 
             modalTitle = "Andean Flamingo"
             modalInfo = "I am a flamingo"
             weight = "130lbs-180lbs"
             className = "Andean-flamingo"
            />

            <Animal 
             modalTitle = "Red-Eyed Tree Frog"
             modalInfo = "I am a tree frog"
             weight = "130lbs-180lbs"
             className = "Red-eyed-tree-frog"
            />
        </div>
    )
}

// this returns the methods above & has the animation warpped around it 
// This is rendered and is how everything in America is displayed
function SouthAmerica() {

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
        {/* Renders the South America content function */}
        <SouthAmericaContent />
        </motion.div>
    );
}

export default SouthAmerica;
