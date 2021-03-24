import React, { useState } from 'react';

import LeftModal from './LeftModal';
import Modal from './Modal';

function Cards(props) {
    // Varibale created to take in images for the cards background 
    let bg_img = `url(${props.images})`
    // Varibale created that assigns title & decription as props
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
               {/* p that uses the assigned description for the card */}
                <p>{description}</p>
                {/* button that will promt the user info about the animal for the card ***NOT DONE** */}    
                 
            <button className = "buttonCard" onClick = {() => setShow(true)}> <i class="fas fa-bars"></i> Learn More </button>              
            
            <LeftModal title = {modalTitle} onClose = {() => setShow(false)} show = {show} >
              <img id="CrowImg" src={document.url} alt=''/>
              <p>{document.name}</p>
              <p>{document.avgMatureHeight}</p>
              <p>{document.avgMatureLength}</p>
              <p>{document.avgMatureWeight}</p>
              <p>{document.conservationStatus}</p>
              <p>{document.lifeExpectancy}</p>
              <p>{document.otherNames}</p>
            </LeftModal>  
            
            <Modal title = {modalTitle} onClose = {() => setShow(false)} show = {show} >
            <p>{modalInfo}</p>
            </Modal>                       
            </div>
            </div>
        </div>
    )
}

export default Cards;