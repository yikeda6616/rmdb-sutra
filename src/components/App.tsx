import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './Home';
import { Movie } from './Movie';
import { NotFound } from './NotFound';
import { Header } from './elements/Header';

const App: React.FC = () => (
  <Router>
    <Header></Header>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/:movieId">
        <Movie />
      </Route>
      <Route default>
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default App;
