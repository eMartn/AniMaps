
import React, {useState} from 'react'

import Modal from './Modal'; 
import LeftModal from './LeftModal';
import AnimalProfileDeets from '../RenderProfile';
import TriviaDetails from '../RenderTrivia';



function Animal(props){

    // Varibale created that assigns title & decription as props
    // alternate way of doing -> EX: prop.title or props.description
    // doing it like this makes it easier to manage
    let {className, modalInfo, modalTitle, weight,id, Images} = props
    const [show,setShow] = useState(false);
  return (
  <div>
     <div className = {className} onClick = {() => setShow(true)}  ></div>
     <LeftModal onClose = {() => setShow(false)} show = {show} >
   
    {/* <img id = {id} src = {Images} /> */}

     <p>{AnimalProfileDeets(modalTitle, "profile")}</p>
    </LeftModal>   

    <Modal onClose = {() => setShow(false)} show = {show} >
    {/* <img id = "Crow" src = {Image} /> */}
    <p>{AnimalProfileDeets(modalTitle, "description")}</p>
     <p>{TriviaDetails(modalTitle)}</p>
    </Modal>     
  </div>
)
}

export default Animal;