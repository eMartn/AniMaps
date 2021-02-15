import React from 'react'
import { Button } from './Button'
import '../App.css';
import './AsiaSection.css';

function AsiaSection() {
    return (
        <div class = "asia-container">
            <h1> Asia Continent</h1>
            <div className = "asia-btns">
            <Button className = 'btns' buttonStyle = 'btn--outline'  buttonSize = 'btn--large'> Previous</Button>
            <Button className = 'btns' buttonStyle = 'btn--primary'  buttonSize = 'btn--large'> Next</Button>

           </div>
            <img id = 'AsiaImg' src = "Images/Asia.png" />
            
        </div>
    )
}

export default AsiaSection
