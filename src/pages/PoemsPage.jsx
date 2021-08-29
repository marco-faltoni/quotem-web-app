import React from "react";
// import components
import SearchHalf from '../components/SearchHalf/SearchHalf';
import {useLocation} from 'react-router-dom';
// import {HamburgerMenu} from '../style/Icon';
// Redux
// import {useDispatch, useSelector} from 'react-redux';
// actions
// import {fetchAdvice, fetchPoemAndQuote} from '../actions/index';


const PoemsPage = () => {

  return (
    <div className="wrapper-searchpage">
      <div className="wrapper-qp">
        <SearchHalf search variants={"poems"}/>
        <SearchHalf results/>
      </div>
    </div>
  );
};


export default PoemsPage;