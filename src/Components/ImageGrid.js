import React from 'react';
import useFirestore from './hooks/useFirestore';

const ImageGrid = () => {
    // get docs in images collection with useFirestore component
    const { docs } = useFirestore('Animals');
    console.log(docs);

    return (
        <div className="img-grid">
            images
        </div>
    )
}

export default ImageGrid;