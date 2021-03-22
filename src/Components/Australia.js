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
  let {className, modalInfo,modalTitle,weight,id, images} = props
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
             modalTitle = "Crocodile"
             modalInfo = "I am a Crocodile"
             weight = "130lbs-180lbs"
             className = "Crocodile"
             id = "CrocImg"
             images = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgreenglobaltravel.com%2Fwp-content%2Fuploads%2F2018%2F02%2FDarwin-Kakadu-Australian-Road-Trip-Loop-Crocodile.jpg&f=1&nofb=1"
            />

            <Animal 
             modalTitle = "Kangaroo"
             modalInfo = "I am a Kangaroo"
             weight = "130lbs-180lbs"
             className = "Kangaroo"
             id = "KangarooImg"
             images = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.nationalgeographic.com%2Fcontent%2Fdam%2Fanimals%2Fthumbs%2Frights-exempt%2Fmammals%2Fr%2Fred-kangaroo_thumb.ngsversion.1485883287286.adapt.1900.1.JPG&f=1&nofb=1"
            />

            <Animal 
             modalTitle = "Koala"
             modalInfo = "I am a Koala"
             weight = "130lbs-180lbs"
             className = "Koala"
             id = "KoalaImg"
             images = "https://i.natgeofe.com/n/ec4956e6-d21d-4ce9-a6fd-b5e26bb94ba3/koala_thumb_3x4.JPG?w=600&h=799.5"
            />

            <Animal 

             modalTitle = "Peacock spider"
             modalInfo = "I am a Spider"
             weight = "130lbs-180lbs"
             className = "Spider"
             id = "SpiderImg"
             images = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gEInOtMntW-22l80wOOLSgHaHa%26pid%3DApi&f=1"
            />

            <Animal 
             modalTitle = "Butterfly"
             modalInfo = "I am a Butterfly"
             weight = "130lbs-180lbs"
             className = "Butterfly"
             id = "ButterflyImg"
             images = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa9%2Fe8%2Fab%2Fa9e8abbecea72b6bb0774ce29918f261.jpg&f=1&nofb=1"
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
