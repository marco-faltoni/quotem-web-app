import React, {useEffect} from "react";
// import components
import SearchInput from '../SearchInput/SearchInput';
import Suggests from '../Suggests/Suggests';
import Card from '../Card/Card';
import Loader from '../Loader';
// Redux
import {useDispatch, useSelector} from 'react-redux';
import {fetchRandomList} from '../../actions/search';
import { motion } from "framer-motion";
import { opacityFast, slideToRight, slideToLeftBig, sliderContainer} from "./animation";

const SearchHalf = (props) => {
  // getting back the data from redux
  const {poems, quotes, menu} = useSelector((store) => store);
  const { variants, search, results } = props;
  const poemsRandomEmpty = poems.searched?.length;
  const quotesRandomEmpty = quotes.searched?.length;

  // fecth authors
  const dispatch = useDispatch();
  useEffect(()=> {
    if (results && variants === "poems") {
      if (poemsRandomEmpty === 0) {
        dispatch(fetchRandomList("poem"));
        dispatch({
          type: 'TOGGLE_LOADER_SEARCHPAGE',
          payload: {
            value: false,
          }
        });
      }
    }else if (results && variants === "quote") {
      if (quotesRandomEmpty === 0) {
        dispatch(fetchRandomList("quote"));
        
      }
      dispatch({
        type: 'TOGGLE_LOADER_SEARCHPAGE',
        payload: {
          value: false,
        }
      });
    }
    
  },[dispatch]);


  return (
    <motion.div variants={opacityFast} initial="hidden" animate="visible" className={`wrapper-half ${search ? "search" : "results"} poems`}>
      {search && (
        <>
          <motion.h2 variants={slideToRight} className="big-tl sr pm">Search {variants === "poems" ? "Poems" : "Quotes"}</motion.h2>
          {variants === "poems" ? <SearchInput poemInput /> : <SearchInput quoteInput />}
          {variants === "poems" ? <Suggests poemSuggests /> : <Suggests quoteSuggests />}
        </>
      )}
      {results && (
        <>
          <motion.h2 variants={slideToLeftBig} className="big-tl sr qt">
            {menu.noResults ? (
              "No Results"
            ): (
              menu.valueSaved !== null ? menu.valueSaved : "Random"
            )}
          </motion.h2>
          {menu.isLoading ? (
            <motion.div className="loading-results">
              <div className="ld-wrap">
                <Loader />
              </div>
            </motion.div>
          ) : ( 
            <motion.div variants={sliderContainer} initial="hidden" animate="show" className="wrapper-cards">
              {variants === "poems" ? <Card randomPoems /> : <Card randomQuotes />}
            </motion.div>
          )}

          
        </>
      )}
    </motion.div>
  );
};


export default SearchHalf;