import React, {useEffect} from "react";
// Redux
import {useDispatch, useSelector} from 'react-redux';
import {fetchAuthors, fetchAuhtorClicked,} from '../../actions/search';
import { motion } from "framer-motion";
import { sentece, letter } from "./animation";

const Suggests = (props) => {
  // getting back the data from redux
  const {poems, quotes} = useSelector((store) => store);
  const { poemSuggests, quoteSuggests } = props;
  const poemsAuthorsEmpty = poems.authorList.length;
  const quotesAuthorsEmpty = quotes.authorList.length;

  const dispatch = useDispatch();
  const handleAuthor = (type, val) => {
    dispatch(fetchAuhtorClicked(type, val))
  };

  useEffect(()=> {
    if (poemSuggests) {
      if (poemsAuthorsEmpty === 0) {
        dispatch({
          type: 'TOGGLE_LOADER_SEARCHPAGE',
          payload: {
            value: true,
          }
        });
        dispatch(fetchAuthors("poem"));
      }
    }else if (quoteSuggests) {
      dispatch({
        type: 'TOGGLE_LOADER_SEARCHPAGE',
        payload: {
          value: true,
        }
      });
      if (quotesAuthorsEmpty === 0) {
        dispatch(fetchAuthors("quote"));
      }
    }
    
  },[dispatch]);

  return (
    <motion.div initial="hidden" animate="visible" className={`suggests-wrapper`}>
      <motion.h3 variants={letter}>recommended authors</motion.h3>
      <motion.div variants={sentece} className="authors-wrapper">
        {poemSuggests && (
          poems.authorList?.map((aut, index)=> {
            return (
              <motion.h4 variants={letter} key={index} onClick={() => handleAuthor("poem", aut)}>
                {aut}
              </motion.h4>
            )
          })
        )}
        {quoteSuggests && (
          quotes.authorList?.map((aut, index)=> {
            return(
              <motion.h4 variants={letter} key={index} onClick={() => handleAuthor("quote", aut.name)}>
                {aut.name}
              </motion.h4>
            )
          })
        )}
      </motion.div>
    </motion.div>
  );
};


export default Suggests;