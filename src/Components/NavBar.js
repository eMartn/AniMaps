import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './NavBar.css';


// inports React from React using extension es7
// Download extension clicking last logo in the bar
   //Link is a replacement to A tag with React Router
//if btn outline is not there then it would default to primary style 

function NavBar() {

    // This is essentiallt false -> true -> false -> true
    // Essentially reversin state
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false); 
    const [button,setButton] = useState(true); 

    const showButton = () => {

            if(window.innerWidth <= 960){
                   setButton(false);
            }else{
                setButton(true);
            }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className = "navbar">
            <div className ="navbar-container">
                {/* AniMaps logo and text */}
            <Link to ="/" className= "navbar-logo"> 
            ANIMAPS <i class="fas fa-frog"></i>
            </Link> 
            <div className = 'menu-icon' onClick = {handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className = {click ? 'nav-menu active' : 'nav-menu'}>

                {/* Nav item for the Home
                Will take you Home if you click it
                */}
                <li className = 'nav-item'>
                <Link to='/' className= 'nav-links' >
                Home
                 </Link>
                </li>

                {/* Nav item for the Learn More buttom
                Will take you to organizations and charities you can donate to
                */}
                <li className = 'nav-item'>
                <Link to='/' className= 'nav-links'  >
                Learn More
                 </Link>
                </li>

                {/* Nav item for the left arrow
                Will take you the next region
                */}
                <li className = 'nav-item'>
                    {/* onClick={closeMobileMenu} */}
                <Link to='/next' className= 'nav-links' >
                <i class="fas fa-arrow-left"></i>

                 </Link>
                </li>

                {/* Nav item for the right arrow
                Will take you the next region
                */}
                <li className = 'nav-item'>
                <Link to='/previous' className= 'nav-links'>
                    {/* This is just the icon for eight arrow taken from Font awesome */}
                <i class="fas fa-arrow-right"></i>

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
