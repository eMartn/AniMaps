// import React, { useState, useEffect } from "react";
// import firebase from "./firebase";

// function GetTrivia(animalName)
// {
//    const [animals, setAnimals] = useState([]);
//    const [loading, setLoading] = useState(false);
//    const [ids, setIds] = useState([]);
//    const [trivia, setTrivia] = useState([]);
   
//    const db = firebase.firestore();
//    const ref = db.collection("Animals"); //this is a reference to the Animals collection in the db
//    /**
//     * function that iterates through the Animal collection to find the specific animal document requested
//     */
//    function getAnimals()
//    {
//      setLoading(true);

//      ref.onSnapshot((querySnapshot) => {
//        const items = [];
//        querySnapshot.forEach((doc) => {
//            if (doc.data().name === animalName) // if the name in the document is the same, add the data to the array
//            {
//              // I am trying to find the name of the document having already known the name of the animal
//              const documentName = doc.id;
//              console.log(documentName);
//              items.push(doc.data());
//              return;
//            }         
//        });
//        setAnimals(items); 

//        setLoading(false);
//      });
//      // Animals > docName > Trivia > docName > fields
//      const documentName = ref.get()
//      console.log(documentName);
//      const triviaRef = ref.doc(documentName)
//      ref.onSnapshot((querySnapshot) => {
//        const trivias = [];
//        querySnapshot.forEach((doc) => {
//          trivias.push(doc.data());
//        });
//        setTrivia(trivias);
//      });
     
//    }

   

//    useEffect(() => {
//      getAnimals();
//    }, []);

//    if (loading)
//      {
//        return <h1>Loading...</h1>; // displays this while the data is loading
//      }
     

//      // returns the properties of the animal in paragraph tags
//      return (
//        <div>
//           {trivia.map((trivias) =>(  

//                <div key={trivias.id}>
//                  {/* <img id="CrowImg" src={animal.url} alt=''/> */}
//                  <p>{trivias.trivia1}</p>
//                  <p>{trivias.trivia1}</p>
//                </div>            
//          ))}  
//        </div>
     
//      );
// }   

// export default GetTrivia;