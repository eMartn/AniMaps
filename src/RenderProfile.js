 import React, { useState, useEffect } from "react";
 import firebase from "./firebase";

 
 
 function AnimalProfileDeets(animalName, output)
 {
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const db = firebase.firestore();
    const ref = db.collection("Animals"); //this is a reference to the Animals collection in the db
    /**
     * function that iterates through the Animal collection to find the specific animal document requested
     */
    function getAnimals()
    {
      setLoading(true);
      ref.onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
            if (doc.id === animalName) // if the name in the document is the same, add the data to the array
            {
              // I am trying to find the name of the document having already known the name of the animal
              items.push({...doc.data(), id: doc.id});
              return;
            }         
        });
        setAnimals(items); 
        setLoading(false);
      }); 
    
    }

    useEffect(() => {
      getAnimals();
      //getTrivia();
    }, []);
    
    if (loading)
      {
        return <h1>Loading...</h1>; // displays this while the data is loading
      }

      // returns the properties of the animal in paragraph tags
      // remember if you want to get rid of animal name just comment it out here 
      //style = {{fontSize: '1.8vw'}}
      //console.log(animals.length);
        if (output === "profile")
        {
          return (
          <div>
            {animals.map((animal) =>(             
                 <div key={animal.id}>
                   <img id="CrowImg" src={animal.url} alt=''/>  
                   <div>                 
                    <p className='animalName' style={{fontSize: '1.8vw', 
                               textAlign: 'center', 
                               color: 'rgb(255, 204, 38)' 
                               }}>
                      {animal.name}</p> 
                    <p style={{textAlign: 'left', fontSize: '1.1vw', marginLeft: '1.5%'}}>
                      Other Names: {animal.otherNames}</p>                       
                    <p style={{textAlign: 'left', fontSize: '1.1vw', marginLeft: '1.5%'}}>
                      Size: {animal.size}</p>                                  
                    <p style={{textAlign: 'left', fontSize: '1.1vw', marginLeft: '1.5%'}}>
                      Weight: {animal.weight}</p>
                    <p style={{textAlign: 'left', fontSize: '1.1vw', marginLeft: '1.5%'}}>
                      Life Expectancy: {animal.lifeExpectancy}</p>      
                    <p style={{textAlign: 'left', fontSize: '1.1vw', marginLeft: '1.5%'}}>
                      Conservation Status: {animal.status}</p>
                   </div>
                 </div>                            
           ))}  
           
         </div>
         );
        }else if (output === "description")
          {
            let description;
            {animals.map((animal) =>(             
               description = animal.description
              .replaceAll("\\n", "\n")                        
            ))}  
            
            return (
              <div>
                
                {animals.map((animal) =>(             
                    <div key={animal.id}>
                      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap', width: '75%'}}>{description}</p>
           
                    </div>                            
              ))}  
            
            </div>
            )
          }
        
      
 }   
 
 export default AnimalProfileDeets;