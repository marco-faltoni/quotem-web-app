import React from 'react';
import './style/app.scss';
import LandingHome from "./pages/LandingHome";
//Router
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  
  const location = useLocation();

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
