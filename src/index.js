import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { MovieSearch } from './components/MovieSearch';
import { MovieLists } from './components/MovieLists';
import { Navigation } from './components/Navigation';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Navigation/>
    <Switch>
      <Route exact path="/" component={MovieSearch} />
      <Route exact path="/movie-lists" component={MovieLists} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);