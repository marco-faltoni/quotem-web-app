import React, {useEffect} from 'react';
import './style/app.scss';
import LandingHome from "./pages/LandingHome";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
// Redux
import {useDispatch, useSelector} from 'react-redux';
// actions
import {fetchAdvice, fetchPoemAndQuote} from './actions/index';

function App() {

  const location = useLocation();

  // fecth initial data
  const dispatch = useDispatch();
  useEffect(()=> {
      dispatch(fetchAdvice());
      dispatch(fetchPoemAndQuote());
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
