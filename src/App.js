import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from "react";
import AllMovies from './AllMovies';
import Details from './Details';
import NotFound from './notFound';
import './App.css';

function App() {
  return (
    <Router>
        <div className='app'>
          <Switch>
              <Route exact path='/' component={AllMovies}/>
              <Route exact path='/notFound' component={NotFound}/> 
              <Route exact path='/:movieID' component={Details}/>
          </Switch>
        </div>
    </Router>
  );
}


export default App;
