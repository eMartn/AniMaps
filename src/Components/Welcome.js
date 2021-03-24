import React from 'react';
import styled from 'styled-components'
import Image from '../Sprites/gecko.gif';
import Image2 from '../Sprites/legs.gif';
import Image3 from '../Sprites/elephant.gif';
import Image4 from '../Sprites/rhino.gif';
import Image5 from '../Sprites/cheetah.gif';
import Image6 from '../Sprites/frog.gif';

import {motion} from 'framer-motion';
import {flashAnimation} from '../Animations';
import { Button } from './Button';
import {transition } from '../Animations';
import {Link} from 'react-router-dom';
import NavBar from '../Components/NavBar';

// CSS for GIF
// creates a const for section which is used below
const Section = styled.section`
 //background: url(${Image}) center;
height: 100%;
height: 100vh;
//background-size: cover;
display: flex;
justify-content: center;
//background-repeat: no-repeat;
margin-top: -80px;
opacity: 0.8;
background-filter: blur[5px];

animation-name: animate;
animation-direction: alterate-reverse;
animation-duration: 30s;
animation-fill-mode: forwards;
animation-iteration-count: infinite;
animation-play-state: running;
animation-timing-function: ease-in-out;


@keyframes animate{
    
0%{
    background: url(${Image2}) center;
    background-repeat: no-repeat;
    background-size: cover;
}
20%{
    background: url(${Image6}) center;
    background-repeat: no-repeat;
    background-size: cover;
}
40%{
    background: url(${Image3}) center;
    background-repeat: no-repeat;
    background-size: cover;
}
60%{
    background: url(${Image4}) center;
    background-repeat: no-repeat;
    background-size: cover;
}
80%{
    background: url(${Image5}) center;
    background-repeat: no-repeat;
    background-size: cover;
}
100%{
    background: url(${Image}) center;
    background-repeat: no-repeat;
    background-size: cover;
}
}
`;

// CSS for container which contains the p tag & button
// creates a const for container which is used below
const Container = styled.div`
// CSS for button
button {    
    text-decoration-color: green;
    margin-top: 25vh;
    font-size: clamp(2rem, 4vw, 2.15rem);
   padding: 2rem 5rem;
   border-radius: 12px;
   color: white;
   background: #2a2e12;
    // margin-left: 45px;
    margin-left: auto;
    margin-right: auto;
   border:none;
   cursor: pointer;
   outline: none;
   box-shadow: 1px 1px 2px 2px #1e1e1e;
   display: flex;
    
}

// CSS for paragraph
p{
font-size: clamp(1.3rem, 6vw, 1.55rem);
color: white;
-webkit-text-stroke-width: 1.2px;
-webkit-text-stroke-color: black;
margin-top: 2vh;
width: 750px;
}
`;

// const that holds the DISCOVER BUTTON 
const WelcomeButton = ({children}) => {
    return (
        // Framer motion wrapper to get animations working 
        <motion.div
        whileHover={{
        scale: 1.1,
        //  transition: {
        //      yoyo: Infinity
        //  }   
    }
        }
    className="container"
    initial={{ scale: 0 }}
    animate={{ rotate: 0, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}
        >
        <Link to = '/Asia' className = 'btn-next'>
            <button>
            {children}
            </button>
        </Link>
        </motion.div>
    )
};

// const that uses a  function to return the section & container
 const Welcome = () => {
    return (
        
        // Motion uses motion farmer which allows for cool animations
        // needs to be wrapped in this in order for animation to work
        // Animation can be found in animations file
        <motion.div
        // defines animations
            initial = "out"
            animate = "in"
            exit = "out"
            variants = {flashAnimation}
       >
           {/* this is the tranpartent navbar  */}
         <NavBar />
        <Section>
            <Container>
            {/* Button responsbile for leading you to asia section  */}
            {/* <Button> DISCOVER MORE</Button> */}
            <WelcomeButton>DISCOVER MORE</WelcomeButton>

            {/* Fact that it displays for now */}
            <p>Cows poo up to 15 times a day, which can be as much as 115 pounds of manure per day, or approximately 21 tons per year.</p>
            </Container>
        </Section>

        </motion.div>
    )
};

export default Welcome;