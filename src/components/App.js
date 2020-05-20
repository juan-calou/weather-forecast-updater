import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import StorePredictions from '../pages/StorePredictions';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/storepredictionsbyurl" component={StorePredictions} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
