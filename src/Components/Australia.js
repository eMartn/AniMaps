import React from 'react'
//  import { Button } from './Button'
import '../App.css';
import './AsiaSection.css';
import {Link} from 'react-router-dom';
import { Button, Header, Image, Modal, Table } from 'semantic-ui-react';
import {motion} from 'framer-motion';
import {fromLeftAnimation} from '../Animations';

function AustraliaContent() {
    return (
        <div class = "asia-container">
            <h1> Australia</h1>

            <div className = "asia-btns">
                {/* Grabbing button stuff from Button class without it it wll not function  */}
            {/* <Button className = 'btns' buttonStyle = 'btn--primary'  buttonSize = 'btn--large'>   <i class="fas fa-arrow-left"></i></Button>
             <Button className = 'btns' buttonStyle = 'btn--primary'  buttonSize = 'btn--large'>   <i class="fas fa-arrow-right"></i></Button>
                */}

                <Link to='/Asia' className= 'to-region' >   
                <i class="fas fa-arrow-left"></i>

                 </Link>

                 <Link to='/australia' className= 'to-region'>
                <i class="fas fa-arrow-right"></i>
                 </Link>

           </div>
            {/*  Image for the Asia continent    */}
            <img id = 'AsiaImg' src = "Images/Australia.jpg" />
            
            

        </div>
    )
}

function ModalExampleModal() {
    const [open, setOpen] = React.useState(false)
  
    return (
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Show Modal</Button>}
      >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image size='medium' src='/Images/redPanda.png' wrapped />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your e-mail
              address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setOpen(false)}>
            Nope
          </Button>
          <Button
            content="Yep, that's me"
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
    )
  }

  

function Australia() {
   
    return (
        <motion.div
        initial = 'out'
        animate = 'end'
        exit = 'out'
        variants = {fromLeftAnimation}
        > 
        <AustraliaContent />
        {/* <ModalExampleModal/> */}
 
        </motion.div>
        
    );


}

export default Australia
