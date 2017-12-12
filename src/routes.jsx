import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './App';
import Timeline from './components/Timeline';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/timeline" component={Timeline}/>
    </div>
  </Router>
);

export default Routes;
