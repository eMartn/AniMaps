import { motion } from 'framer-motion';
import React, { useState } from 'react';
import useFirestore from './hooks/useFirestore';
import Modal from './Modal';
import LeftModal from './LeftModal';
import Cards from './Cards';

/** 3/21/21
 * TODO refactor Cards function so that modal info is pulled from one location for both animals page and map pages 
 * - Trevor Lee 
 * */ 




/** 3/21/21
 * TODO order animals alphabetically before displaying 
 * - Trevor Lee
 * */

// returns rows of cards from database for Animals page
const ImageGrid = () => {
    // get docs in images collection with useFirestore component
    const { docs } = useFirestore('Animals');
    //console.log(docs);

    

    // go through docs, build cards, and group cards by how long we want the row to be; accumulates an array of arrays, where each array in each index is 4 cards (for one row)
    const groupedCards = docs.reduce((acc, currentValue, docsIndex) => {   // reduce method takes an accumulator, a current value, and an index and loops through docs
        var accIndex = parseInt(docsIndex / 4); // docsIndex values of 0, 1, 2, and 3 will evalute to 0 here for our accumulator index (and then cards 4 through 7 will go in accIndex 1)
        acc[accIndex] = acc[accIndex] || [];    // fallback value of empty array so that it will still render and avoid an error if we map over a null value
        acc[accIndex].push( // build an animal card of the current animal in docs, and store in the current accumulator index (4 cards will go in each accIndex for a row)
            <div>
            <Cards 
                // Sets the title to the animal in the card which is a sample animals for now 
                title = {docs[docsIndex].name}
                // sets the imag that will be shown on the card for the animal which iis a placeholder for now 
                images = {docs[docsIndex].url}
                // sets the description to the animal in the card which is a sample description for now 
                
                modalTitle = {docs[docsIndex].name}
                modalInfo = "SECOND DESRC"
                doc = {docs[docsIndex]}
            />
            </div>
        );
        return acc; // the accumulator now holds multiple arrays: each with 4 cards
    }, []);
    return (    // map through the now-grouped cards, where each item is 4 cards (a row) and format each row, and return it to Animals.js
        <div>
            {groupedCards.map((row, i) => {
                return (
                    <motion.div className = "CardContainer"
                    initial={{ scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}>
                        <div className="row" key={`row-${i}`}>{row}</div>
                    </motion.div>
                    )
            })}
        </div>
    );
}

export default ImageGrid;