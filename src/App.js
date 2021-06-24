import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import JobsProvider from './contexts/searchContext';
import * as ROUTES from './constants/routes';
import { Home, JobDetails } from './pages';

function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <JobsProvider>
          <Home />
        </JobsProvider>
      </Route>
      <Route path={ROUTES.JOB_DETAILS}>
        <JobDetails />
      </Route>
    </Router>
  );
}

export default App;
