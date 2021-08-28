import React, {useEffect, useState} from 'react';
import './style/app.scss';
import LandingHome from "./pages/LandingHome";
import PoemsPage from "./pages/PoemsPage";
import QuotesPages from "./pages/QuotesPage";
import BookmarksPage from "./pages/BookmarksPage";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
// Redux
import {useDispatch, useSelector} from 'react-redux';
// actions
import {fetchAdvice, fetchPoemAndQuote} from './actions/index';
import MenuNav from './components/MenuNav';

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
      <MenuNav />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <LandingHome/>
        </Route>
        <Route path={['/poems/:id', '/poems']}>
          <PoemsPage/>
        </Route>
        <Route path={['/quotes/:id', '/quotes']}>
          <QuotesPages/>
        </Route>
        <Route  path="/bookmarks" exact>
          <BookmarksPage/>
        </Route>
      </Switch>
    </div>
  );
}


export default App;
