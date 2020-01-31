import React from 'react';
import './App.css';
import Quotes from './components/QuoteBox/Quotes.js';
import Footer from  './components/Footer/Footer';
import Paths from './components/Nav/Paths';
import Logo from "./components/Nav/Nav";
import Error404 from "./components/Errors/Error404";
import Moments from "./components/Moments/Moments";
import MomentVideo from "./components/Moments/MomentVideo"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <div className="no-of">
          <Logo />
          {/* Switch for React Router */}
          <Switch>
            <Route exact path="/">
              <Paths />
            </Route>
            <Route path="/quote">
              <Quotes />
            </Route>
            <Route exact path="/moments">
              <Moments />
            </Route>
            {/* With Parameters */}
            <Route path="/moments/:id" component={MomentVideo} />
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
          {/* End Switch */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
