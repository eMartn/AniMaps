import { motion } from 'framer-motion';
import React, { useState } from 'react';
import useFirestore from './hooks/useFirestore';
import Modal from './Modal';
import LeftModal from './LeftModal';


function Cards(props) {
    // Varibale created to take in images for the cards background 
    let bg_img = `url(${props.images})`
    // Varibale created that assigns title & decription as props
    // alternate way of doing -> EX: prop.title or props.description
    // doing it like this makes it easier to manage
    let {title, description,modalInfo,modalTitle,weight} = props

    const [show,setShow] = useState(false);

    return (      
      // div created for the card
        <div className = "card">
          {/* Wrapper created for the card */}
            <div className = "wrapper">
            {/* <div className = "name"></div> */}
            {/* Div created for image card & sets the image as the background */}
            <div className = "card_img" style = {{backgroundImage: bg_img}}>
            </div>
            {/* div created to hold info for the card */}
            <div className = "cardTitle">
              {/* h1 that uses the assigned title for the card */}
                <h1>{title}</h1>
               {/* p that uses the assigned description for the card */}
                <p>{description}</p>
                {/* button that will promt the user info about the animal for the card ***NOT DONE** */}    
                 
            <button className = "buttonCard" onClick = {() => setShow(true)}> <i class="fas fa-bars"></i> Learn More </button>              
            
            <LeftModal title = {modalTitle} onClose = {() => setShow(false)} show = {show} >
            <p>{weight}</p>
            </LeftModal>  
            
            <Modal title = {modalTitle} onClose = {() => setShow(false)} show = {show} >
            <p>{modalInfo}</p>
            </Modal>                       
            </div>
            </div>
        </div>
    )
}

const ImageGrid = () => {
    // get docs in images collection with useFirestore component
    const { docs } = useFirestore('Animals');
    console.log(docs);

    // multiple rows
    const grouped = docs.reduce((acc, post, ind) => {
        var index = parseInt(ind / 4);
        acc[index] = acc[index] || [];
        acc[index].push(
            <div>
            <Cards 
                // Sets the title to the animal in the card which is a sample animals for now 
                title = {docs[ind].name}
                // sets the imag that will be shown on the card for the animal which iis a placeholder for now 
                images = {docs[ind].url}
                // sets the description to the animal in the card which is a sample description for now 
                description = "Sample text"
                modalTitle = {docs[ind].name}
                modalInfo = "SECOND DESRC"
            />
            </div>
        );
        return acc;
    }, []);
    return (
        <div>
            {grouped.map((row, i) => {
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

    

    //Keep formatting
    // return (
    //     <motion.div className = "CardContainer"
    //      initial={{ scale: 0 }}
    //      animate={{ rotate: 0, scale: 1 }}
    //      transition={{
    //        type: "spring",
    //        stiffness: 260,
    //        damping: 20
    //      }}
    //     >
    //     <div className="row">
    //         {/* make sure docs exist, cycle through and out template for each doc */}
    //         { docs && docs.map((doc, i) => (
                
    //             <div>
    //                 <Cards 
    //                 // Sets the title to the animal in the card which is a sample animals for now 
    //                 title = {doc.name}
    //                 // sets the imag that will be shown on the card for the animal which iis a placeholder for now 
    //                 images = {doc.url}
    //                 // sets the description to the animal in the card which is a sample description for now 
    //                 description = "Sample text"
    //                 modalTitle = {doc.name}
    //                 modalInfo = "SECOND DESRC"
    //                 />
                
                

    //                 {i++}
    //                 {console.log(i)}
    //             </div>
    //         ))}
    //     </div>
        
    //     </motion.div>
    // )
}

export default ImageGrid;