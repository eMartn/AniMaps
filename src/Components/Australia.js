import React, {useState}  from 'react'
import '../App.css';
import './Australia.css';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {fromLeftAnimation} from '../Animations';
import AniNav from '../Components/AniNav';
import Modal from './Modal';
import LeftModal from './LeftModal';

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
            > Australia</motion.h1>

           {/*
             assigns a class name for the buttons
            again this uses asia section and will be changed in the future
            */}
            <motion.div className = "AU-btns"
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
            }}
            >
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

           </motion.div>
            {/*  Image for the Asia continent */}
            <img id = 'AsiaImg' src = "Images/Australia.jpg" alt = " "/>
            
            <Animal 
             modalTitle = "Crocodile"
             modalInfo = "I am a Crocodile"
             weight = "130lbs-180lbs"
             className = "Crocodile"
            />

            <Animal 
             modalTitle = "Kangaroo"
             modalInfo = "I am a Kangaroo"
             weight = "130lbs-180lbs"
             className = "Kangaroo"
            />

            <Animal 
             modalTitle = "Koala"
             modalInfo = "I am a Koala"
             weight = "130lbs-180lbs"
             className = "Koala"
            />

            <Animal 
             modalTitle = "Spider"
             modalInfo = "I am a Spider"
             weight = "130lbs-180lbs"
             className = "Spider"
            />

            <Animal 
             modalTitle = "Rabbit"
             modalInfo = "I am a Rabbit"
             weight = "130lbs-180lbs"
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
