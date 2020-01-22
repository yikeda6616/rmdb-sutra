import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './Home';
import { Movie } from './Movie';
import { NotFound } from './NotFound';
import { Header } from './elements/Header';

import { GlobalStyle } from './styles/GlobalStyle';

const App: React.FC = () => (
  <Router>
    <>
      <Header></Header>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/:movieId" component={Movie} exact />
        <Route component={NotFound} />
      </Switch>
      <GlobalStyle />
    </>
  </Router>
);

export default App;
