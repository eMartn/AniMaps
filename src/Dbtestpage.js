 import React, { useState, useEffect } from "react";
 import firebase from "./firebase";
 
 function AnimalProfileDeets(animalName)
 {
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [trivia, setTrivia] = useState([]);
    
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
            if (doc.data().name === animalName) // if the name in the document is the same, add the data to the array
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
      getTrivia();
    }, []);

    const onlyAnim = animals;
    console.log(onlyAnim);
    let animalId;
    animals.map((animal) => {
       animalId = animal.id
    });
    const triviaRef = db.collection('Animals').doc(animalId).collection('Trivia'); //reference to an animal's trivia collection
    console.log(triviaRef);
    console.log(animalId);
    
    function getTrivia()
    {
      console.log("omg")
      setLoading(true);
      triviaRef.get().then(querySnapshot => {
        const trivias = [];
        querySnapshot.docs.forEach(doc => {
          console.log(doc.data());
          trivias.push(doc.data());
        });
        console.log(trivias);
        setTrivia(trivias);
        setLoading(false);
      });
      // triviaRef.onSnapshot((querySnapshot) => {
      //   const trivias = [];
      //   console.log("hi there");
      //   querySnapshot.forEach((doc) => {
      //     console.log("hello1");
      //     trivias.push(doc.data());
      //     console.log("hello2");
      //     console.log("hello:", trivias);
      //   });
      //   setTrivia(trivias);
      //   setLoading(false);
      // });
    }

    if (loading)
      {
        return <h1>Loading...</h1>; // displays this while the data is loading
      }


      // returns the properties of the animal in paragraph tags
      return (
        <div>
           {animals.map((animal) =>(             
                <div key={animal.id}>
                  <img id="CrowImg" src={animal.url} alt=''/>
                  <p>{animal.name}</p>
                  <p>{animal.avgMatureHeight}</p>
                  <p>{animal.avgMatureLength}</p>
                  <p>{animal.avgMatureWeight}</p>
                  <p>{animal.conservationStatus}</p>
                  <p>{animal.lifeExpectancy}</p>
                  <p>{animal.otherNames}</p>
                  <p>{animal.id}</p>   
                  <p>{trivia.map((trivias) => (     
                    <div>
                       {console.log("hi")}
                      <p>{trivias.trivia1}</p>
                      {console.log("hello")}
                    </div>
                  ))} </p>           
                </div>                            
          ))}  
          
        </div>
      );
 }   
 
 export default AnimalProfileDeets;