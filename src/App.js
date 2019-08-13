import {BrowserRouter as Router, Route,} from 'react-router-dom';
import React from "react";
import AllMovies from './AllMovies';
import Details from './Details';
import './App.css';

function App() {
  return (
    <Router>
       <div className='app'>
      <Route exact path='/' component={AllMovies}/>
      <Route exact path='/details' component={Details}/>
  </div>
    </Router>
  );
}


export default App;
