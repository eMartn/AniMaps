import React from 'react';
import useFirestore from './hooks/useFirestore';

const ImageGrid = () => {
    // get docs in images collection with useFirestore component
    const { docs } = useFirestore('Animals');
    console.log(docs);

    return (
        <div className="img-grid">
            {/* make sure docs exist, cycle through and out template for each doc */}
            { docs && docs.map(doc => (
                <div className="img-wrap" key={doc.id}>
                    <img src={doc.url} alt="animal" />
                </div>
                
            ))}
        </div>
    )
}

export default ImageGrid;