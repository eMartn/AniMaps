import React, { useState, useEffect } from "react";
import firebase from "./firebase";

function TriviaDetails(animalName)
{
//    const [animals, setAnimals] = useState([]);
   const [loading, setLoading] = useState(false);
   const [trivia, setTrivia] = useState([]);
   
   const db = firebase.firestore();
   const ref = db.collection("Animals"); //this is a reference to the Animals collection in the db

   useEffect(() => {
     getTrivia();
   }, []);

   const triviaRef = ref.doc(animalName).collection('Trivia'); //reference to an animal's trivia collection
   //console.log(triviaRef);
   //console.log(animalId);
   
   function getTrivia()
   {
    //  console.log("omg")
     setLoading(true);
     triviaRef.get().then(querySnapshot => {
       const trivias = [];
       querySnapshot.docs.forEach(doc => {
         //console.log(doc.data());
         trivias.push(doc.data());
       });
       //console.log(trivias);
       setTrivia(trivias);
       setLoading(false);
     });
   }

   if (loading)
     {
       return <h1>Loading...</h1>; // displays this while the data is loading
     }


     // returns the properties of the animal in paragraph tags
    
     return (
       <div>
            
                <p>{trivia.map((trivias) => ( 
                
                <div>
                    <p style={{textAlign: 'justified', width: '72%'}}>
                      {trivias.trivia1}
                    </p>                   
                </div>
            ))} </p>           
      </div>                                        
     );
}   

export default TriviaDetails;