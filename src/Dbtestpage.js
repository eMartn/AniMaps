 import React, { useState, useEffect } from "react";
 import firebase from "./firebase";
 
 function AnimalProfileDeets(animalName)
 {
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("Animals");
    function getAnimals()
    {
      setLoading(true);
      ref.onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          console.log(animalName);
            if (doc.data().name === animalName)
            {
              items.push(doc.data());
              return;
            }         
        });
        setAnimals(items);
        setLoading(false);
      });
    }

    useEffect(() => {
      getAnimals();
    }, []);

    if (loading)
      {
        return <h1>Loading...</h1>;
      }

      return (
        <div>
           {animals.map((animal) =>(             
                <div key={animal.id}>
                  <p>{animal.name}</p>
                  <p>{animal.avgMatureHeight}</p>
                  <p>{animal.avgMatureLength}</p>
                  <p>{animal.avgMatureWeight}</p>
                  <p>{animal.conservationStatus}</p>
                  <p>{animal.lifeExpectancy}</p>
                  <p>{animal.otherNames}</p>
                </div>            
          ))}  
        </div>
      );
 }   
 
 export default AnimalProfileDeets;