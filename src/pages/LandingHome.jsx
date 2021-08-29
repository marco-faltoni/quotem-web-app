import React from "react";
// import components
import HomeHalf from '../components/HomeHalf/HomeHalf';
import {useLocation} from 'react-router-dom';
// import {HamburgerMenu} from '../style/Icon';
// Redux
// import {useDispatch, useSelector} from 'react-redux';
// actions
// import {fetchAdvice, fetchPoemAndQuote} from '../actions/index';


const LandingHome = () => {

  return (
    <div className="wrapper-home">
      <div className="wrapper-qp">
        <HomeHalf variants={"poems"}/>
        <HomeHalf variants={"quote"}/>
      </div>
    </div>
  );
};


export default LandingHome;