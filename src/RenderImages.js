import React, { useState, useEffect } from "react";
import firebase from "./firebase";

function RenderImages(animalName)
{
//    const [animals, setAnimals] = useState([]);
   const [loading, setLoading] = useState(false);
   const [image, setImages] = useState([]);
   
   const db = firebase.firestore();
   const ref = db.collection("Animals"); //this is a reference to the Animals collection in the db

   useEffect(() => {
     getImages();
   }, []);

   const triviaRef = ref.doc(animalName).collection('Images'); //reference to an animal's images collection
   
   function getImages()
   {
    //  console.log("omg")
     setLoading(true);
     triviaRef.get().then(querySnapshot => {
       const images = [];
       querySnapshot.docs.forEach(doc => {
         //console.log(doc.data());
         images.push(doc.data());
       });
       //console.log(trivias);
       setImages(images);
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
            
                <p>{image.map((images) => ( 
                  // <div  className = "profileBorderTrivFirst">
                <div  className = "">
                
                    <img id="CrowImg" src= {images.url} alt=''/>  
                                      
              
                {/* </div> */}
                </div>
            ))} </p>           
      </div>                                        
     );
}   

export default RenderImages;