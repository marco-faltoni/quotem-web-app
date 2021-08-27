import React, {useState, useEffect} from "react";
// import components
import HomeHalf from '../components/HomeHalf/HomeHalf';
import {useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {HamburgerMenu} from '../style/Icon';

const LandingHome = () => {

  return (
    <div className="wrapper-home">
      <div className="header">
        <span></span>
        <h1>Quotem</h1>
        <HamburgerMenu />
      </div>

      <div className="wrapper-qp">
        <HomeHalf variants={"poems"}/>
        <HomeHalf variants={"quote"}/>
      </div>

    </div>
  );
};


export default LandingHome;