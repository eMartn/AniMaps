import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

// An array of CSS classes 
// Styling done for buttons depending one is primary & one is outline
// Will just style depending on the name
const STYLES = ['btn--primary', 'btn--outline'];

// Will determine the button size depending on class name given 
const SIZES = ['btn--medium', 'btn--large'];

// Pass in properties, 
export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    // If the component has a button style then it will be the button style that is created for it
    // If not true then it will set the value to the first style in the styles array const STYLES ( 'btn--primary' line 8 in Button.js)
const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

// Same logic applies to button size 
// If no size is defined then it will default to the first value in the array (btn--medium)
const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (

        <Link to = '/next' className = 'btn-next'>
            <button>
            {children}

            </button>


        </Link>

      
    )



};

