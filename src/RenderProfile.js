 import React, { useState, useEffect } from "react";
 import firebase from "./firebase";

 /*

 LOGS: 4/4/21

 Created styling in left modalinfo. Formatted it to look and display nicely. Added border and background colors to achieve this.
 Added a ani
 -Joshua Grimaldo
 */
 
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
                 <div key={animal.id} >
                   <img id="CrowImg" src={animal.url} alt=''/>  
                   <div className = "profileBorder">                 
                    <p className='animalName' style={{fontSize: '1.8vw', 
                               textAlign: 'center', 
                               color: 'rgb(255, 204, 38)' 
                               }}>
                      {animal.name}</p> 

                      <div className = "outerBorder">
                     <h3 className = "profileBorderTitle">Other Names:
                     </h3> 

                     <p className = "profileBorderIn" style={{textAlign: 'left', fontSize: '1vw', marginLeft: '1.5%'}}>
                       {animal.otherNames}</p> 
                     </div>
                    
                     <div className = "outerBorder">
                       <h3 className = "profileBorderTitle">Size:
                        </h3>               
                    
                        <p style={{textAlign: 'left', fontSize: '1vw', marginLeft: '1.5%'}}>
                       {animal.size}</p>  
                       </div>

                       <div className = "outerBorder">
                       <h3 className = "profileBorderTitle">Weight:  </h3>                              
                    <p style={{textAlign: 'left', fontSize: '1vw', marginLeft: '1.5%'}}>
                       {animal.weight}</p>
                        </div>

                        <div className = "outerBorder">
                       <h3 className = "profileBorderTitle">Life Expectancy: </h3>
                    <p style={{textAlign: 'left', fontSize: '1vw', marginLeft: '1.5%'}}>
                       {animal.lifeExpectancy}</p>   
                          </div>
                          
                          <div className = "outerBorder">
                       <h3 className = "profileBorderTitle">Conservation Status:</h3>
                    <p style={{textAlign: 'left', fontSize: '1vw', marginLeft: '1.5%'}}>
                       {animal.status}</p>
                       </div>
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
                    <div key={animal.id} className = "profileBorder">

                      <p style={{ textAlign: 'justified', whiteSpace: 'pre-wrap'}}>
                      <div className = "descriptionContent">
                      {description}
                      </div>   
                      </p>
                   
                    
                    </div>                            
                ))}  
                         
                </div>
              )
          }
         
             
 }   
 
 export default AnimalProfileDeets;