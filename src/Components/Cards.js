import React, { Component } from 'react'
import './Cards.css';
import Image from '../Sprites/tiger.png';
import AniNav from '../Components/AniNav';

function Cards(props) {
        let bg_img = `url(${props.images})`
        let {title} = props
        return (      
            <div className = "card">
                <div className = "wrapper">

                <div className = "name"></div>
                <div className = "card_img">
                <img src= "https://i.natgeofe.com/n/5892ed3f-0b48-4227-9900-a712811a5903/mammals-hero_2x3.jpg?w=600&h=900" />
                </div>
                <div className = "cardTitle">
                    <h1>{title}</h1>
                    <button>Learn More</button>
                </div>
                </div>
            </div>
        )
}


function Animals() {
    return (
       <>
         <AniNav />
        <div className = "container">
          <div className = "row ">
          <Cards 
          title = "Sample Animal"
          images = "../Sprites/animalStock.jpg"
          />
          <Cards 
          title = "Sample Animal"
          // images = 
          />
          </div>        
        </div>
        </>
    )
}


export default Animals
