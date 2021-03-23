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


  // Varibale created that assigns title & decription as props
  // alternate way of doing -> EX: prop.title or props.description
  // doing it like this makes it easier to manage
  let {className, modalInfo,modalTitle,weight} = props
  const [show,setShow] = useState(false);
return (
<div>
   <div className = {className} onClick = {() => setShow(true)}  ></div>
   <LeftModal title = {modalTitle} onClose = {() => setShow(false)} show = {show} >
   <p>{AnimalProfileDeets(modalTitle)}</p>
  </LeftModal>   

  <Modal title = {modalTitle} onClose = {() => setShow(false)} show = {show} >
   <p>{modalInfo}</p>
  </Modal>     
</div>
)}

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
             modalTitle = "SouthernThreeBandedArmadillo"
             modalInfo = "I am an armadillo"
             weight = "130lbs-180lbs"
             className = "Southern-three-banded-armadillo"
            />

            <Animal 
             modalTitle = "AndeanFlamingo"
             modalInfo = "I am a flamingo"
             weight = "130lbs-180lbs"
             className = "Andean-flamingo"
            />

            <Animal 
             modalTitle = "RedEyedTreeFrog"
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
