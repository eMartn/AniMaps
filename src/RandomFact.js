import React, { useState, useEffect } from "react";
import firebase from "./firebase";

function RandomFact()
{

   const [loading, setLoading] = useState(false);
   const [docs, setDocs] = useState([]);
   
   const db = firebase.firestore();
   const ref = db.collection("AllTrivia"); //this is a reference to the Trivia collection in the db

   function getDocName()
    {
      setLoading(true);
      ref.onSnapshot((querySnapshot) => {
        const items = [];        
        querySnapshot.forEach((doc) => {
              items.push({...doc.data(), id: doc.id});
                               
        });
        setDocs(items); 
        setLoading(false);
      }); 
    }

   useEffect(() => {
     getDocName();
   }, []);

   

   if (loading)
     {
       return <h1>Loading...</h1>; // displays this while the data is loading
     }

     // get docs > random doc > trivia subcollection ref > trivia block doc ref > random trivia field?
     let rand = Math.floor(Math.random() * docs.length);


     // returns the properties of the animal in paragraph tags
     
     console.log("rand " + rand)  
            
             let output = docs.map((doc, i) => {   
                  if (i === rand) 
                    {
                        {console.log("i: " + i)}
                        return (
                            <div>
                              {doc.fact}
                              {console.log(doc.fact)}        
                            </div>
                        )
                        
                    }
               
                })          
      return output;                                       
    
}   

export default RandomFact;