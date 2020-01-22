import React from 'react';
import { Router } from '@reach/router';
import { Home } from './Home';
import { Movie } from './Movie';
import { NotFound } from './NotFound';
import { Header } from './elements/Header';

const App: React.FC = () => (
  <>
    <Header></Header>
    <Router>
      <Home path="/" />
      <Movie path="/:movieId" />
      <NotFound default />
    </Router>
  </>
);

export default App;
