import React, {useState} from 'react'
import '../App.css';
import './Africa.css';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Image from '../Sprites/tigerNew.png';
import Image2 from '../Sprites/camel.png';
import Modal from './Modal';
import LeftModal from './LeftModal';
import {motion} from 'framer-motion';
import {fromRightAnimation} from '../Animations';
import AniNav from '../Components/AniNav';

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

// displays the image content 
//TODO Figure out some conditional rendering so that when we click on redPanda the fox component does not render 
//TODO https://reactjs.org/docs/conditional-rendering.html
function AfricaContents() {

  /* 
  use state for the modal to manage the value
It returns a pair of values: the current state and a function that updates it. 
  This is why we write const [show, setShow] = useState(false)
  It is false by default becuase nothing is shown initially   
  but when it is set to true it will show the modal
  Look at line 143
 For more info: https://reactjs.org/docs/hooks-state.html

 https://medium.com/tinyso/how-to-create-a-modal-component-in-react-from-basic-to-advanced-a3357a2a716a
*/
  const [show,setShow] = useState(false);


  // if(!setShow){
  //   return <Fox isShown = {false}/>;

  // }

    return (
      /*
      For now this uses the asia container css
      but will change in the future to have its own
      */
        <div class = "africa-container">
          {/* Header for africa */}
            <motion.h1
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
            }}
            > 
            
            <Link to='/SouthAmerica' className= 'to-region' >                  
                {/* Font awesome icon */}
                <i class="fas fa-chevron-left"></i>
                 </Link>
            
            Africa
            
            <Link to='/Europe' className= 'to-region'>
            <i class="fas fa-chevron-right"></i>
                 </Link>

             </motion.h1>
             &nbsp;

           

            {/*  Image for the Africa continent    */}
            {/* <Imaging> */}
            <img id = 'AsiaImg' src = "Images/Africa.jpg" alt = " " />
            
            <Animal 
             modalTitle = "Elephant"
             modalInfo = "I am a elephant"
             weight = "130lbs-180lbs"
             className = "African-Elephant"
            />

            <Animal 
             modalTitle = "Lion"
             modalInfo = "I am a lion"
             weight = "130lbs-180lbs"
             className = "Lion"
            />

            <Animal 
             modalTitle = "Giraffee"
             modalInfo = "I am a Giraffee"
             weight = "130lbs-180lbs"
             className = "Giraffee"
            />

            <Animal 
             modalTitle = "Rhino"
             modalInfo = "I am a Rhino"
             weight = "130lbs-180lbs"
             className = "Rhino"
            />

        </div>
    )
}

// this returns the methods above & has the animation warpped around it 
// This is rendered and is how everything in Africa is displayed
function Africa() {

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
       {/* Renders africa contents */}
        <AfricaContents />
        </motion.div>
      
    );
}

export default Africa
