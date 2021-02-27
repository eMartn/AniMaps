import React from 'react';
import styled from 'styled-components'
import Image from './elephant.gif';
import {Link} from 'react-router-dom';
import AsiaSection from './AsiaSection';
import {motion} from 'framer-motion';
import {flashAnimation} from '../Animations';
import { Button } from './Button';

// CSS for GIF
// creates a const for section which is used below
const Section = styled.section`

 background: url(${Image}) center;
height: 100%;
height: 100vh;
background-size: cover;
display: flex;
justify-content: flex-start;
align-items: flex-end;
background-repeat: no-repeat;
margin-top: -80px;
opacity: 0.9;
background-filter: blur[5px];
`;

// CSS for container which contains the p tag & button
// creates a const for container which is used below
const Container = styled.div`
color: white;
padding: 3em;
// background-filter: blur[5px];
// background-color: rgba(0,0,0,0.3);
margin: 20rem;
border-radius: 20px;
margin-left: 450px;
margin-right: 450px;

// CSS for button
button {    
 margin-top: 15px;
  font-size: clamp(2rem, 4vw, 2.15rem);
// font-size: 35px;
 padding: 2.5rem 5rem;
 border-radius: 12px;
 color: white;
 background: #2a2e12;
 margin-left: 45px;
// margin-right: 200px;
 border:none;
 cursor: pointer;
 outline: none;
 box-shadow: 8px 8px 11px #1e1e1e;
}

// CSS for paragraph
p{
font-size: clamp(1rem, 6vw, 1.2rem);
color: black;
margin-top: 5px;
}


`;



// const that uses a callback function to return the section & container
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
        <Section>
            <Container>

             {/* <button>DISCOVER MORE

            <Link to='/Asia'  >   
                <i class="fas fa-arrow-alt-circle-down"></i>

                </Link>
            </button>   */}

            {/* Button responsbile for leading you to asia section  */}
            <Button className = 'btns' buttonStyle = 'btn--primary'  buttonSize = 'btn--large'> DISCOVER MORE</Button>

            {/* Fact that id displayed for now */}
            <p>Cows poo up to 15 times a day, which can be as much as 115 pounds of manure per day, or approximately 21 tons per year.</p>
          
       
            </Container>

          
        </Section>

        </motion.div>
    )
};

export default Welcome;