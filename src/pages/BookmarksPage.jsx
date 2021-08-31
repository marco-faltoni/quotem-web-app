import React from "react";
// Redux
import { useSelector} from 'react-redux';
// import components
import BookmarksHalf from '../components/BookmarkHalf/BookmarkHalf';
import CardDetails from '../components/CardDetails/CardDetails';
import { motion } from "framer-motion";
import {pageAnimation, slider,  slider2, slider3, slider4,sliderContainer} from "./animation";
// import CardCreate from '../components/CardCreate/CardCreate';

const BookmarksPage = () => {
  // getting back the data from redux
  const {menu} = useSelector((store) => store);
  // const dispatch = useDispatch();
  // const loadCreateHandler = () => {
  //   dispatch({
  //     type: 'TOGGLE_CARD_CREATE',
  //     payload: {
  //       value: !menu.showCardCreate,
  //     }
  //   });
  // }
  return (
    <>
    <motion.div exit="exit" variants={pageAnimation} className="wrapper-bookmarks">
      <div className={`wrapper-qp bookmarks ${menu.showCard ? "blur" : ""}`}>
        <BookmarksHalf poems/>
        <BookmarksHalf quotes/>
      </div>
      {/* <div className="wrap-btn" onClick={() => loadCreateHandler()}>
        <button type="button">
          Create new content
        </button> 
      </div>
      <CardCreate /> */}
      <CardDetails bookmarks />
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


export default BookmarksPage;