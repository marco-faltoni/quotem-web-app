import React, {useState, useEffect} from "react";
// import components

import {useLocation} from 'react-router-dom';


const LandingHome = () => {
  // getting back the data from redux
  // const {} = useSelector((store) => store.);



  return (
    <div className="wrapper">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Quotable</h1>
        <p>
        "Not at Home to Callers",
            "Says the Naked Tree --",
            "Bonnet due in April --",
            "Wishing you Good Day --"
        </p>
        <h2>Emily Dickinson</h2>

        <a
          className="App-link"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discover More about this author
        </a>
    </div>
  );
};


export default LandingHome;