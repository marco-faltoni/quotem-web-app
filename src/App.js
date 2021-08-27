import React, {useEffect, useState} from 'react';
import './style/app.scss';
import LandingHome from "./pages/LandingHome";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
// Redux
import {useDispatch, useSelector} from 'react-redux';
// actions
import {fetchAdvice, fetchPoemAndQuote} from './actions/index';



function App() {

  let isMobile = window.matchMedia("only screen and (max-width: 1024px)").matches;
  const location = useLocation();

  // fecth initial data
  const dispatch = useDispatch();
  useEffect(()=> {
      dispatch(fetchAdvice());
      dispatch(fetchPoemAndQuote(isMobile ? true : false));
  },[dispatch]);

  return (
    <div className="App">
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <LandingHome/>
        </Route>
        {/* <Route path={['/poems/:id', '/poems']}>
          <PoemsPage/>
        </Route>
        <Route path={['/quotes/:id', '/quotes']}>
          <QuotesPages/>
        </Route> */}
      </Switch>
    </div>
  );
}


export default App;
