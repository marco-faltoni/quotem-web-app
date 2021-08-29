import React from "react";
// import components
import SearchHalf from '../components/SearchHalf/SearchHalf';
import CardDetails from '../components/CardDetails/CardDetails';
// import {HamburgerMenu} from '../style/Icon';
// Redux
// import {useDispatch, useSelector} from 'react-redux';
// actions
// import {fetchAdvice, fetchPoemAndQuote} from '../actions/index';


const PoemsPage = () => {

  return (
    <div className="wrapper-searchpage">
      <div className="wrapper-qp searchpage">
        <SearchHalf search variants={"poems"}/>
        <SearchHalf results variants={"poems"}/>
      </div>
      <CardDetails randomPoems/>
    </div>
  );
};


export default PoemsPage;