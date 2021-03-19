import { useState, useEffect } from 'react';
import { projectFirestore } from '../../firebase';

// collection argument will be a string of the collection we want
const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    // db communication, function fires whenever collection is updated
    useEffect(() => {
        // use firestore service to reach into collection and then listen for documents inside collection with onSnapshot
        const unsub = projectFirestore.collection(collection)   // returned function is used to unsubscribe from collection if image grid component is unmounted
            .orderBy('name', 'desc')    // order by whatever property specified in the arguments
            .onSnapshot((snap) => {
                // create array of documents we will eventually return
                let documents = [];
                snap.forEach(doc => {   // cycle through documents currently with this snapshot
                    documents.push({...doc.data(), id: doc.id})  // get properties of data and spreads those into properties inside object along with id

                });
                setDocs(documents); // update state variable
            });

            // cleanup function that unsubscribes from the function when no longer in use
            return () => unsub();
    }, [collection])

    return { docs };
}

export default useFirestore;