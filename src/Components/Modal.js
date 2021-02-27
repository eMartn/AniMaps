import React from 'react'
import styled from 'styled-components';
import {MdClose} from 'react-icons/md';


// const Background = styled.div`

// width: 100%;
// height: 100%;
// background: rgba(104, 151, 158,0.8);
//  position: fixed;
// display: flex;
// justify-content: center;
// align-items: center;
// position: absolute;
//   top: 500px;
//   left: 2px;
// `;

const ModalWrapper = styled.div`
width: 1390px;
height: 800px;
box-shadow: 0 5px 16px rgba(0,0,0,0.2);
background: rgba(104, 151, 158,0.8);
color: #000;
// display: flex;
// justify-content: center;
//  align-items: center;
grid-template-columns: 1fr 1fr;

position: absolute;
  top: 500px;
  left: 50px;
z-index: 10;
border-radius: 10px;

p{
margin-bottom: 1rem;   
}
`;

// styling to close the modal
const CloseModal = styled(MdClose)`
cursor: pointer;
position: absolute;
top: 20px;
right: 20px;
width: 32px;
height: 32px;
padding: 0;
z-index: 10;
`

export const Modal = ({showModal, setShowModal}) => {
    return  ( 
    <>
    {/* If showModal is true -> display the modal*/}
        {showModal ? (
            // wrapper in ModalWrapper for styling 
            <ModalWrapper showModal = {showModal}>
                {/* Testing text for the modal */}
                <h1>Testing text</h1>
                <p>More test text</p>

                <CloseModal aria-modal = 'Close modal'onClick = {()=> setShowModal(prev =>!prev )}/> 

                </ModalWrapper>  
        ): null} 
     </>
    ) 
};

export default Modal;