import React, {useEffect} from "react";
// Redux
import {useDispatch, useSelector} from 'react-redux';
import {fetchAuthors, fetchAuhtorClicked,} from '../../actions/search';

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
        dispatch(fetchAuthors("poem"));
      }
    }else if (quoteSuggests) {
      if (quotesAuthorsEmpty === 0) {
        dispatch(fetchAuthors("quote"));
      }
    }
    
  },[dispatch]);

  return (
    <div className={`suggests-wrapper`}>
      <h3>recommended authors</h3>
      <div className="authors-wrapper">
        {poemSuggests && (
          poems.authorList?.map((aut, index)=> {
            return (
              <h4 key={index} onClick={() => handleAuthor("poem", aut)}>
                {aut}
              </h4>
            )
          })
        )}
        {quoteSuggests && (
          quotes.authorList?.map((aut, index)=> {
            return(
              <h4 key={index} onClick={() => handleAuthor("quote", aut.name)}>
                {aut.name}
              </h4>
            )
          })
        )}
      </div>
    </div>
  );
};


export default Suggests;