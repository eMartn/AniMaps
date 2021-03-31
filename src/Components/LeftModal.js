import React from 'react'
import styled from 'styled-components';

// This uses styled components to style our components below
//This one is resposible for the outer modal
const ModalStyle = styled.div`
position: fixed;
left: 0;
top: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0,0.7);
display: flex;
align-items: center;
justify-content: center;
z-index: 1;
`
// This one is resposible for the style of the modal itself 
// This is where the content will be shown
const ModalContentStyle = styled.div`
width: 22vw;
height: 90vh;
background-color: rgba(104, 151, 158,0.8);
color: black;

z-index: 1;
-ms-transform: translateX(55%);
transform: translateX(-150%);
//first value tope left second top right
border-radius: 20px 0px 0px 20px;
border-style: ridge;
border-color: rgba(19, 49, 56, 0.561);
border-width: 5px;
animation-name: zoom;
animation-duration: 0.5s;
@keyframes zoom {
  from {transform: scale(0.1)} 
  to {transform: scale(1)}
}

@media only screen and (max-width: 600px) {

  width: 25vw;
  height: 70vh;
}

@media only screen (min-width: 700px) and (max-width: 900px) {

  width: 23vw;
  height: 70vh;

}



`
// This is responsible for the header style
const ModalHFStyle = styled.div`
padding: 2vh;
//font-size: 1.5rem;
`
// This is responsible for the title style
const ModalTitleStyle = styled.div`
margin: 0;
`
// This is responsible for the body style aka the white border 
// you see in the modal
const ModalBodyStyle = styled.div`
padding: 10px;
border-top: 1px solid #eee;
border-bottom: 1px solid #eee;
`
// exporting this to see the actual modal when called
// This will show the modal when called and is needed to do so 
const Modal = props =>{
/*
  This  will handle show/hide by props.show value so we possibly have 2 use cases either true or false.
  if it is true it will display the modal 
  if it is false it will hide it 
*/
  if(!props.show){
    return null; 
  }

return(

    <ModalStyle>
    <div className = "modal2">

      <ModalContentStyle>
        <ModalHFStyle>
        <div className = "title">{props.title}</div>
        </ModalHFStyle>
      <div className = "MyContent">{props.children}</div>
    </ModalContentStyle>
    </div>
    </ModalStyle>
)
}

export default Modal;