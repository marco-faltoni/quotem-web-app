import React from "react";
// import components
import SearchHalf from '../components/SearchHalf/SearchHalf';
import CardDetails from '../components/CardDetails/CardDetails';
// Redux
import { useSelector} from 'react-redux';
import { motion } from "framer-motion";
import {pageAnimation, slider,  slider2, slider3, slider4,sliderContainer} from "./animation";


const PoemsPage = () => {
  // getting back the data from redux
  const {menu} = useSelector((store) => store);
  return (
    <>
    <motion.div exit="exit" variants={pageAnimation} className="wrapper-searchpage">
      <div className={`wrapper-qp searchpage ${menu.showCard ? "blur" : ""}`}>
        <SearchHalf search variants={"poems"}/>
        <SearchHalf results variants={"poems"}/>
      </div>
      <CardDetails randomPoems/>
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


export default PoemsPage;