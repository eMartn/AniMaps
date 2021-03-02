import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

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

                {/* Nav item for the Learn More buttom
                Will take you to organizations and charities you can donate to
                */}
                <li className = 'nav-item'>
                    {/* Sets the link to learnmore which does not exist currently */}
                <Link to='/charities' className= 'nav-links'  >
                Charities 
                 </Link>
                </li>

                <li className = 'nav-item'>
                    {/* Sets the link to learnmore which does not exist currently */}
                <Link to='/animal-list' className= 'nav-links'  >
                Animals 
                 </Link>
                </li>

             </ul>
            </div>
         </nav>
        </>
    )
}

export default NavBar
