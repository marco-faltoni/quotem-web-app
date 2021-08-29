import React from "react";
// import components
import SearchHalf from '../components/SearchHalf/SearchHalf';
import CardDetails from '../components/CardDetails/CardDetails';
// import {HamburgerMenu} from '../style/Icon';
// Redux
// import {useDispatch, useSelector} from 'react-redux';
// actions
// import {fetchAdvice, fetchPoemAndQuote} from '../actions/index';


const QuotesPage = () => {

  return (
    <div className="wrapper-searchpage">
      <div className="wrapper-qp">
        <SearchHalf search variants={"quote"}/>
        <SearchHalf results variants={"quote"}/>
      </div>
      <CardDetails randomQuotes />
    </div>
  );
};


export default QuotesPage;