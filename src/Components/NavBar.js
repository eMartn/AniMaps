import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './NavBar.css';
 import styled from 'styled-components';


// inports React from React using extension es7
// Download extension clicking last logo in the bar
//Link is a replacement to A tag with React Router
//if btn outline is not there then it would default to primary style 

function NavBar() {

    // useState for click
    // Update the state and change it when clicked 
    const [click, setClick] = useState(false);
    // Sets the click and sets the value to the opposite of useState
     // This is essentiallt false -> true -> false -> true
    // Essentially reversing state
    //Reversing the state of useState
    const handleClick = () => setClick(!click);

    return (
        <>
        <nav className = "navbar">
            <div className ="navbar-container">
                {/* AniMaps logo and text */}
            <Link to ="/" className= "navbar-logo"> 
            ANIMAPS <i class="fas fa-frog"></i>
            </Link> 
            {/* Mobile icon & links */}
            {/* calls handleClick function to reverse the state */}
            <div className = 'menu-icon' onClick = {handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            {/* Click stuff is mainly for mobile function which we will probably not get to into? */}
            <ul className = {click ? 'nav-menu active' : 'nav-menu'}>

                {/* Nav item for the Home
                Will take you Home if you click it
                */}


                {/* <li className = 'nav-item'>
                <Link to='/Home' className= 'nav-links' >
                Home
                 </Link>
                </li> */}

                {/* Nav item for the Learn More buttom
                Will take you to organizations and charities you can donate to
                */}
                <li className = 'nav-item'>
                    {/* Sets the link to learnmore which does not exist currently */}
                <Link to='/charities' className= 'nav-links'  >
                Charities 
                 </Link>
                </li>

                {/* Nav item for the left arrow
                Will take you the next region
                */}
                
                {/* <li className = 'nav-item'> */}
                    {/* onClick={closeMobileMenu} */}
                {/* <Link to='/previous' className= 'nav-links' >
                <i class="fas fa-arrow-left"></i>

                 </Link>
                </li> */}

                {/* Nav item for the right arrow
                Will take you the next region
                */}
                {/* <li className = 'nav-item'>
                <Link to='/next' className= 'nav-links'> */}
                    {/* This is just the icon for eight arrow taken from Font awesome */}
                {/* <i class="fas fa-arrow-right"></i>

                 </Link>
                </li> */}

                <li className = 'nav-item'>
                    {/* Sets the link to learnmore which does not exist currently */}
                <Link to='/animal-list' className= 'nav-links'  >
                Animals 
                 </Link>
                </li>



             </ul>

            {/* {button && <Button buttonStyle= 'btn--outline'> NEXT</Button>} */}

            </div>
         </nav>
        </>
    )
}

export default NavBar
