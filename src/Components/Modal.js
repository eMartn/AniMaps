import React, {useState} from 'react'
import styled from 'styled-components';
import './Modal.css';
import {motion} from 'framer-motion';
import LeftModal from './LeftModal';

/*
Logs: 3/28/21
Added a transition on the tabs when you switch to another one 
Added a dark orange on the text ti give it a nice contrast
Added border to the right and bttom of the tabs to give it specific border to get rid of double border issue
Added a line height to the H of the content 
*/

// This uses styled components to style our components below
//This one is resposible for the outer modal
const ModalStyle = styled.div`
position: fixed;
left: 0;
top: 0;
right: 0;
bottom: 0;

// background-color: rgba(0,0,0,0.7);
display: flex;
align-items: center;
justify-content: center;
animation-name: zoom;
z-index: 1;
animation-duration: 0.5s;
@keyframes zoom {
  from {transform: scale(0.1)} 
  to {transform: scale(1)}
}
`
// This one is resposible for the style of the modal itself 
// This is where the content will be shown
const ModalContent = styled.div`
width: 67vw;
height: 90vh;
background-color: rgba(110, 135, 104,0.76);
color: black;
z-index: 1;
-ms-transform: translateX(5%);
transform: translateX(19%);
border-radius: 0px 20px 20px 0px;
border-style: ridge;
border-color: rgba(19, 49, 56, 0.561);
border-width: 5px;
@media only screen and (max-width: 600px) {

  width: 80vw;
  height: 70vh;

  border-radius: 0px 19px 20px 0px;
  border-style: ridge;
  border-color: rgba(19, 49, 56, 0.561);
  border-width: 4px;
  overflow: scroll;
}

`

// This is responsible for the header style
const ModalHFStyle = styled.div`
padding: 2vh;


`
// This is responsible for the title style
const ModalTitleStyle = styled.div`
margin: 0;
//font-size: 1.5rem;

`
// This is responsible for the body style aka the white border 
// you see in the modal
const ModalBodyStyle = styled.div`
padding: 10px;
//border-top: 1px solid #eee;
text-align: left;
// border-bottom: 1px solid #eee;

`
// This is styling done for the X you see on the modal
const ModalCloserStyle = styled.div`
cursor: pointer;
position: absolute;
top: 10vh;
right: 3vw;
color: white;
// z-index: 1;


@media only screen and (max-width: 600px) {
  cursor: pointer;
  position: absolute;
  top: 11vh;
  right: 7vw;
}
`

// exporting this to see the actual modal when called
// This will show the modal when called and is needed to do so 
const Modal = props =>{
/*
  This  will handle show/hide by props.show value so we possibly have 2 use cases either true or false.
  if it is true it will display the modal 
  if it is false it will hide it 
  useState is 1 since it is initially what is shown when modalis opened for the first time
  If user leaves modal one second tab then leaves and comes back it will be on second tab given tey don't refresh the page or go to a new one 
  Every time we click on tab we are chaning state passing 1,2, or 3
  */


const [toggleState, setToggleState] = useState(1);
// display index of the tab takes from parameter in tab
  const toggleTab = (index) => {
    setToggleState(index);
  };

   if(!props.show){
     return null; 
   }

 return(



<ModalStyle>

       <ModalContent>
     <div className = "modal-content">
     <div className = "bloc-tabs">

     <button
     // tenary operator to change css based on toggleState
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
         // pass 1 arguement 
          onClick={() => toggleTab(1)}
        >
           DESCRIPTION
        </button>


        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          TRIVIA
        </button>

        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          GALLERY
        </button>

     </div>


     <ModalBodyStyle>
     <div className = "modal-body">
     <div
             // if toggle state equals to 1 then display content for 1
            // rest work that way as well
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Description</h2> 
          <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
            {props.content1}
          </p>
        </div>


        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Trivia</h2>

          <p>
           {props.content2}
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Gallery</h2>

          <p>
            {props.content3}
          </p>
        </div>

     </div>
     </ModalBodyStyle>
     <div className = "modal-closer">
   
   
     <ModalCloserStyle onClick={props.onClose} ><i class="fas fa-times"></i></ModalCloserStyle>
     </div>
  </div>
    </ModalContent>
     </ModalStyle>
 )
 }

export default Modal;