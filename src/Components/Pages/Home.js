import React from 'react';
import '../../App.css';
import AsiaSection from '../AsiaSection';
import {motion} from 'framer-motion';
import { flashAnimation,transition } from '../../Animations';

// THIS PAGE IS NEVER USED I KPET IT JUST INCASE BUT IT DOES NOT AFFECT THE SITE IN ANYWAY NOR IS IT BEING USED ANYWHERE
function Home()
 {

    return (
        <>
        <motion.div
        initial = 'out'
        animate = 'in'
        exit='out'
        variants= {flashAnimation}
        transition = {transition}
        >
        <AsiaSection />
        </motion.div>
        </>
    )

}
 
export default Home;