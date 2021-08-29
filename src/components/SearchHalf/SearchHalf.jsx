import React from "react";
// import components
import SearchInput from '../SearchInput/SearchInput';
import {useLocation} from 'react-router-dom';
// import {HamburgerMenu} from '../style/Icon';
// Redux
// import {useDispatch, useSelector} from 'react-redux';
// actions
// import {fetchAdvice, fetchPoemAndQuote} from '../actions/index';


const SearchHalf = (props) => {

  const { variants, search, results } = props;
  return (
    <div className={`wrapper-half search ${variants === "poems" ? "poem" : "quote"}`}>
      {variants === "poems" && (
        <>
          <h2 className="big-tl sr pm">Search <br /> Poems</h2>
          <SearchInput poemInput />
        </>
      )}
      {variants === "quote" && (
        <>
          <h2 className="big-tl sr qt">Search <br /> Quotes</h2>
          <SearchInput quoteInput />
        </>
      )}
    </div>
  );
};


export default SearchHalf;