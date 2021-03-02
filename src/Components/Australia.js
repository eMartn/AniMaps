import React from 'react'
import '../App.css';
import './AsiaSection.css';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {fromLeftAnimation} from '../Animations';

function AustraliaContent() {
    return (
         /*
      For now this uses the asia container css
      but will change in the future to have its own
      */
        <div class = "asia-container">
            {/* Australia header */}
            <h1> Australia</h1>

           {/*
             assigns a class name for the buttons
            again this uses asia section and will be changed in the future
            */}
            <div className = "asia-btns">
               {/* Experimenting; Pls ignore this */}
                 {/* <Button className = 'btns' buttonStyle = 'btn--primary'  buttonSize = 'btn--large'>   <i class="fas fa-arrow-left"></i></Button>
                 <Button className = 'btns' buttonStyle = 'btn--primary'  buttonSize = 'btn--large'>   <i class="fas fa-arrow-right"></i></Button>
                */}

                {/* Allows us to go to Asia from Australia 
                Link is a replacement to A tag with React Router
                */}
                <Link to='/Asia' className= 'to-region' >   
                {/* Uses a icon from font awesome */}
                <i class="fas fa-arrow-left"></i>
                 </Link>
                 
                {/* Allows us to go to Australia to America 
                Link is a replacement to A tag with React Router
                */}
                 <Link to='/America' className= 'to-region'>
                     {/* Uses a icon from font awesome */}
                <i class="fas fa-arrow-right"></i>
                 </Link>

           </div>
            {/*  Image for the Asia continent */}
            <img id = 'AsiaImg' src = "Images/Australia.jpg" alt = "The continent of Australia"/>
            
            

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
          {/* Renders the Australia content function */}
        <AustraliaContent />
        </motion.div>
        
    );


}

export default Australia
