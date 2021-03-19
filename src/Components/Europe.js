import React, {useState} from 'react'
import '../App.css';
import './Europe.css';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Image from '../Sprites/frog.svg';
import Modal from './Modal';
import {motion} from 'framer-motion';
import {fromRightAnimation} from '../Animations';
import AniNav from '../Components/AniNav';
import LeftModal from './LeftModal';
// styling for the image sprites 

/*
3/18/21
//TODO Created animals in Europe & gave it its own CSS 
-Joshua Grimaldo
*/

function Animal(props){

        // Varibale created that assigns title & decription as props
        // alternate way of doing -> EX: prop.title or props.description
        // doing it like this makes it easier to manage
        let {className, modalInfo,modalTitle,weight} = props
        const [show,setShow] = useState(false);
      return (
      <div>
         <div className = {className} onClick = {() => setShow(true)}  ></div>
         <LeftModal title = {modalTitle} onClose = {() => setShow(false)} show = {show} >
         <p>{weight}</p>
        </LeftModal>   

        <Modal title = {modalTitle} onClose = {() => setShow(false)} show = {show} >
         <p>{modalInfo}</p>
        </Modal>     
      </div>
)
}


// TODO Connect animals via links in modal
// displays content 
function EuropeContent() {
 /* 
  use state for the modal to manage the value
  It returns a pair of values: the current state and a function that updates it. 
  This is why we write const [show, setShow] = useState(false)
  It is false by default becuase nothing is shown initially   
  but when it is set to true it will show the modal
  Look at line 143
 For more info: https://reactjs.org/docs/hooks-state.html
*/
  const [show,setShow] = useState(false);

    return (
        /*
          For now this uses the asia container css
          but will change in the future to have its own
        */
        <div class = "europe-container">
             {/* Header for South America */}
            <h1>Europe</h1>
            {/*assigns a class name for the buttons
               again this uses asia section and will be changed in the future*/}
            <div className = "europe-btns">
               {/* Allows us to go Africa from Europe
                   Link is a replacement to A tag with React Router*/}
                <Link to='/Africa' className= 'to-region' >   
                {/* Font awesome icon */}
                <i class="fas fa-arrow-left"></i>
                 </Link>

                {/* Allows us to go to Asia from Europe
                    Link is a replacement to A tag with React Router
                */}
                 <Link to='/Asia' className= 'to-region'>
                   {/* Font awesome icon */}
                <i class="fas fa-arrow-right"></i>
                 </Link>

           </div>
            {/*  Image for the South America continent    */}
            <img id = 'europeImg' src = "Images/Europe.jpg" alt = " " />
         
                 
            <Animal 
             modalTitle = "FIRST"
             modalInfo = "FIRST DEC"
             weight = "130lbs-180lbs"
             className = "Frog"
            />

            <Animal 
             modalTitle = "BIRD"
             modalInfo = "I am a bird"
             weight = "130lbs-180lbs"
             className = "Crow"
            />

            <Animal 
             modalTitle = "MOOSE"
             modalInfo = "I am a moose"
             weight = "130lbs-180lbs"
             className = "Moose"
            />

            <Animal 
             modalTitle = "Bear"
             modalInfo = "I am a bear"
             weight = "130lbs-180lbs"
             className = "Bear"
            />
        

         

        </div>
    )
}

// this returns the methods above & has the animation warpped around it 
// This is rendered and is how everything in America is displayed
function Europe() {

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
        <EuropeContent />
        </motion.div>
    );
}

export default Europe;
