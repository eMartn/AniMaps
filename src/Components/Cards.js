import React, { useState } from 'react';
import {motion} from 'framer-motion';
import LeftModal from './LeftModal';
import Modal from './Modal';
import TriviaDetails from '../RenderTrivia';

function Cards(props) {
    // Variable created to take in images for the cards background 
    let bg_img = `url(${props.images})`
    // Variable created that assigns title & decription as props
    // alternate way of doing -> EX: prop.title or props.description
    // doing it like this makes it easier to manage
    let {title, description,modalInfo,modalTitle,weight, doc} = props

    const [show,setShow] = useState(false);
    const [document, setDocument] = useState(doc);
    
    return (      

        
      // div created for the card
        <div className = "card">

        

          {/* Wrapper created for the card */}
            <div className = "wrapper">
            {/* <div className = "name"></div> */}
            {/* Div created for image card & sets the image as the background */}
            <div className = "card_img" style = {{backgroundImage: bg_img}}>
            </div>
            {/* div created to hold info for the card */}
            <div className = "cardTitle">
              {/* h1 that uses the assigned title for the card */}
                <h1>{title}</h1>
               {/* p that uses the assigned description for the card 
                FIRST CHILD 
               */}
                <p>{description}</p>
                {/* button that will promt the user info about the animal for the card ***NOT DONE** */}    
                 
            <motion.button className = "buttonCard"  whileHover={{
        scale: 1.1,
    }
        } onClick = {() => setShow(true)}> <i class="fas fa-bars"></i> Learn More </motion.button>              
            
            <LeftModal onClose = {() => setShow(false)} show = {show} >
              <img id="CrowImg" src={document.url} alt=''/>

              <div className = "profileBorder2" >
              <p className='animalName' style = {{fontSize: '1.8vw', color: 'rgb(255, 204, 38)'}}>
                {document.name}
              </p>
             
                   <div className = "outerBorder2">
                     <h3 className = "profileBorderTitle2">Other Names:
                     </h3> 

                     <p className = "profileBorderIn" style={{textAlign: 'left', fontSize: '1vw', marginLeft: '1.5%'}}>
                       {document.otherNames}</p> 
                     </div>


                     <div className = "outerBorder2">
                       <h3 className = "profileBorderTitle2">Size:
                        </h3>               
                    
                        <p style={{textAlign: 'left', fontSize: '1vw', marginLeft: '1.5%'}}>
                       {document.size}</p>  
                       </div>



                       <div className = "outerBorder2">
                       <h3 className = "profileBorderTitle2">Weight:  </h3>                              
                    <p style={{textAlign: 'left', fontSize: '1vw', marginLeft: '1.5%'}}>
                       {document.weight}</p>
                        </div>


                        <div className = "outerBorder2">
                       <h3 className = "profileBorderTitle2">Life Expectancy: </h3>
                    <p style={{textAlign: 'left', fontSize: '1vw', marginLeft: '1.5%'}}>
                       {document.lifeExpectancy}</p>   
                          </div>


                          <div className = "outerBorder2">
                       <h3 className = "profileBorderTitle2">Conservation Status:</h3>
                    <p style={{textAlign: 'left', fontSize: '1vw', marginLeft: '1.5%'}}>
                       {document.status}</p>
                       </div>

              </div>
              
            </LeftModal>  
            
            <Modal title = {modalTitle} onClose = {() => setShow(false)} show = {show}
            
            content1 =  {
            <div className = "descriptionContent">
             { document.description.replaceAll("\\n", "\n")}
            </div>
            }

            content2 = {
              <div className = "profileBorderTrivCards">  
             <p > {TriviaDetails(document.id)}</p>
            </div>
            }

            content3 = { <img id="CrowImg" src={document.url} alt=''/>}

            
            >
            <p >{document.description}</p>
            <p>{TriviaDetails(document.id)}</p>
            </Modal> 

          

            </div>
            </div>



        </div>
    )
}

export default Cards;