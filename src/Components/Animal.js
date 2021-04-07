
import React, {useState} from 'react'

import Modal from './Modal'; 
import LeftModal from './LeftModal';
import AnimalProfileDeets from '../RenderProfile';
import TriviaDetails from '../RenderTrivia';

/*
Logs: 3/29/21
Fittled with the left modal title and after much struggle decided to give
it a seperate title name since the one we were using before has no spaces
Changed some of the font stuff for header title in the right modal
However, cards font is a bit different from the modal in the regions
Still needs to be resolved or decided on what format we will be going with
This will be discussed with teammates in the future.

Three options:

1) Left modal header and animal name under photo
2) Left modal header and NO  animal name under photo
3) NO left modal header and YES animal name under photo

TODO PUSH PHOTO UP TO COVER HEADER AREA ON LEFT MODAL 
- Joshua Grimaldo
*/

function Animal(props){

    // Variable created that assigns title & decription as props
    // alternate way of doing -> EX: prop.title or props.description
    // doing it like this makes it easier to manage
    let {className, modalInfo, modalTitle, weight,id, Images,unrelated} = props
    const [show,setShow] = useState(false);
  return (
  <div>
     <div className = {className} onClick = {() => setShow(true)}  ></div>
     {/* If you want that title gone or shown it is controlled via title = {modalTitle} */}
     <LeftModal  onClose = {() => setShow(false)} show = {show} >
   
    {/* <img id = {id} src = {Images} /> */}
    {/* <p>{modalTitle} </p> */}
     <p>{AnimalProfileDeets(modalTitle, "profile")}</p>
    </LeftModal>   

    <Modal onClose = {() => setShow(false)} show = {show} 
    
    content1 =  {AnimalProfileDeets(modalTitle, "description")}

    content2 = {TriviaDetails(modalTitle)}

    content3 = "[PHOTO]"

    
    >
    {/* <img id = "Crow" src = {Image} /> */}
    <p>{AnimalProfileDeets(modalTitle, "description")}</p>
     <p>{TriviaDetails(modalTitle)}</p>
    </Modal>     
  </div>
)
}

export default Animal;