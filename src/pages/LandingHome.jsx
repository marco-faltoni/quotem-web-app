import React from "react";
// import components
import HomeHalf from '../components/HomeHalf/HomeHalf';


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