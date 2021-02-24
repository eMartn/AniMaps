import React from 'react'
 import { Button } from './Button'
import '../App.css';
import './AsiaSection.css';
import {Link} from 'react-router-dom';


function Australia() {
    return (
        <div class = "asia-container">
            <h1> Austrlia</h1>

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

export default Australia
