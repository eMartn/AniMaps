import { useState, useEffect } from 'react';
import { projectFirestore } from '../../firebase';

// collection argument will be a string of the collection we want
const useAnimalDoc = (id) => {
    const [doc, setDoc] = useState(null);

    // db communication, function fires whenever collection is updated
    useEffect(() => {
        // use firestore service to reach into collection and then listen for documents inside collection with onSnapshot
        const unsub = projectFirestore.collection('Animal')   // returned function is used to unsubscribe from collection if image grid component is unmounted
            .orderBy('name', 'desc')    // order by whatever property specified in the arguments
            .onSnapshot((snap) => {
                // create array of documents we will eventually return
                let document = [];
                snap.forEach(doc => {   // cycle through documents currently with this snapshot
                    if (doc.data().id === id) // if the name in the document is the same, add the data to the array
                    {
                        document = doc;
                        return;
                    }         
                });
                setDoc(document); // update state variable
            });

            // cleanup function that unsubscribes from the function when no longer in use
            return () => unsub();
    }, [])

    return { doc };
}

export default useAnimalDoc;