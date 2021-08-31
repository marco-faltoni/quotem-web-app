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
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { sentece, letter, SlideUp} from "./pages/animation"

function App() {
  // getting back the data from redux
  const {advice} = useSelector((store) => store);
  let isMobile = window.matchMedia("only screen and (max-width: 1024px)").matches;
  const location = useLocation();
  const [display, setDisplay] = useState(false);
  // fecth initial data
  const dispatch = useDispatch();
  useEffect(()=> {
      dispatch(fetchAdvice());
      dispatch(fetchPoemAndQuote(isMobile ? true : false));
  },[dispatch]);

  return (
    <div className="App">
      <MenuNav />
      <motion.div onAnimationComplete={() => setDisplay(true)} variants={SlideUp} initial="hidden" animate="visible" className={`advice ${display ? "none" : ""}`}>
          <motion.div variants={sentece}>
            <motion.h2 variants={letter} >
              {advice.randomAdvice.advice}
            </motion.h2>
          </motion.div>
      </motion.div>
      {display && (
        <AnimatePresence exitBeforeEnter>
    
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact>
              <LandingHome/>
            </Route>
            <Route path={['/poems/:id', '/poems']}>
              <PoemsPage />
            </Route>
            <Route path={['/quotes/:id', '/quotes']}>
              <QuotesPages />
            </Route>
            <Route  path="/bookmarks" exact>
              <BookmarksPage/>
            </Route>
          </Switch>
        </AnimatePresence>
      )}

    </div>
  );
}


export default App;
