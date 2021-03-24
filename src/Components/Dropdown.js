import React, {useState} from 'react';
import {MenuItems} from './MenuItems';
import {Link} from 'react-router-dom';
import './Dropdown.css';

/*
Function that handles the dropdown menu property in the navbar
*/
function Dropdown(){

    // useState that handles the state of the dropdown
    const [click, setClick] = useState(false);

    // toggles the click value
    const handleClick = ()=> setClick(!click) 

return( 
<>

<ul 
onClick = {handleClick}
// If click is true the classdropdwon to be added and if not the class will be dropdown menu
className = {click ? 'dropdown-menu clicked' : 'dropdown-menu'}
>

{/* 
For eachloop that maps through the MenuItems array
item is a variable name, index is for the key
*/}
{MenuItems.map((item, index) => {
    return (
        /**
         * Set key to index
         * Links to the classname or cName from MenuItems array
         * Targeting the cName in that file
         * Path is targeted by the path in the array
         * Whenever it is clicked the value is set to false
         * Then shows title from the array
         */
        <li key = {index}>
            <Link
             className = {item.cName} 
             to = {item.path} 
             onClick = {() => setClick(false)}
             >
            {item.title}
            </Link>
        </li>
    );
})}

</ul>
</>
);
}

export default Dropdown;