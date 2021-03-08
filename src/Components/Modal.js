import React from 'react'
import styled from 'styled-components';

// This uses styled componets to style our components below
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
animation-name: zoom;
animation-duration: 0.5s;
@keyframes zoom {
  from {transform: scale(0.1)} 
  to {transform: scale(1)}
}
`
// This one is resposible for the style of the modal itself 
// This is where the content will be shown
const ModalContentStyle = styled.div`
width: 1390px;
height: 700px;
background-color: rgba(104, 151, 158,0.8);
color: black;
`
// This is responsible for the header style
const ModalHFStyle = styled.div`
padding: 20px;
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
// This is styling done for the X you see on the modal
const ModalCloserStyle = styled.div`
cursor: pointer;
position: absolute;
top: 100px;
right: 60px;
color: white;
`

// exporting this to see the actual modal when called
// This will show the modal when called and is needed to do so 
const Modal2 = props =>{
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
<div className = "modal-content">
<ModalHFStyle>
<div className = "modal-header">

<ModalTitleStyle>
<h3 className = "modal-title"> {props.title}</h3>
</ModalTitleStyle>
</div>
</ModalHFStyle>
<ModalBodyStyle>
<div className = "modal-body">
{props.children}
</div>
</ModalBodyStyle>

<div className = "modal-closer">
{/* className = "button" */}
{/* 
This manages onClose which will help close the modal
I wrapped it in ModalCloserStyle for the styling 
I also used a "X" icon from font awesome 
*/}
<ModalCloserStyle onClick={props.onClose} ><i class="fas fa-times"></i></ModalCloserStyle>
</div>

</div>
</ModalContentStyle>
</div>

</ModalStyle>
)


}


export default Modal2;