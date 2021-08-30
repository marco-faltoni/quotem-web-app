import React, {useEffect} from "react";
// import components
import SearchInput from '../SearchInput/SearchInput';
import Suggests from '../Suggests/Suggests';
import Card from '../Card/Card';
// Redux
import {useDispatch, useSelector} from 'react-redux';
import {fetchRandomList} from '../../actions/search';

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
      }
    }else if (results && variants === "quote") {
      if (quotesRandomEmpty === 0) {
        dispatch(fetchRandomList("quote"));
      }
    }
    
  },[dispatch]);


  return (
    <div className={`wrapper-half ${search ? "search" : "results"} poems`}>
      {search && (
        <>
          <h2 className="big-tl sr pm">Search {variants === "poems" ? "Poems" : "Quotes"}</h2>
          {variants === "poems" ? <SearchInput poemInput /> : <SearchInput quoteInput />}
          {variants === "poems" ? <Suggests poemSuggests /> : <Suggests quoteSuggests />}
        </>
      )}
      {results && (
        <>
          <h2 className="big-tl sr qt">
            {menu.noResults ? (
              "No Results"
            ): (
              menu.valueSaved !== null ? menu.valueSaved : "Random"
            )}
          </h2>
          <div className="wrapper-cards">
            {variants === "poems" ? <Card randomPoems /> : <Card randomQuotes />}
          </div>
          
        </>
      )}
    </div>
  );
};


export default SearchHalf;