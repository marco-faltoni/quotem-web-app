import React from "react";
// import components
import HomeHalf from '../components/HomeHalf/HomeHalf';
import { motion } from "framer-motion";
import {pageAnimation, slider,  slider2, slider3, slider4,sliderContainer} from "./animation"

const LandingHome = () => {
  return (
    <>
    <motion.div variants={pageAnimation} exit="exit" className="wrapper-home">
      <div className="wrapper-qp">
        <HomeHalf variants={"poems"}/>
        <HomeHalf variants={"quote"}/>
      </div>
    </motion.div>
    <motion.div variants={sliderContainer} initial="hidden" exit="exit">
    <motion.div className="frame-1" variants={slider}></motion.div>
    <motion.div className="frame-2" variants={slider2}></motion.div>
    <motion.div className="frame-3" variants={slider3}></motion.div>
    <motion.div className="frame-4" variants={slider4}></motion.div>
    </motion.div>
    </>
  );
};


export default LandingHome;