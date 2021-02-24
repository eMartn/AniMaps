import React from 'react';
import '../../App.css';
import AsiaSection from '../AsiaSection';
import Australia from '../Australia';
import {motion} from 'framer-motion';
import { animationOne,transition } from '../../Animations';


function Home()
 {

    return (
        <>
        <motion.div
        initial = 'out'
        animate = 'in'
        exit='out'
        variants= {animationOne}
        transition = {transition}
        >
        <AsiaSection />
        </motion.div>
        </>
    )

}
 
export default Home;