import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, JobDetails } from './pages';

function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route path={ROUTES.JOB_DETAILS}>
        <JobDetails />
      </Route>
    </Router>
  );
}

export default App;
