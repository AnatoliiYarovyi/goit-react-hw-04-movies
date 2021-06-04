import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import style from './App.module.css';
import AppBar from './components/AppBar';
import routes from './routes';
import Spynner from './components/Spynner';

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage' /*webpackChunkName: "HomePage" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage/MoviesPage' /*webpackChunkName: "MoviesPage" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage/MovieDetailsPage' /*webpackChunkName: "MovieDetailsPage"*/
  ),
);

const App = () => (
  <div className={style.App}>
    <AppBar />
    <Suspense fallback={Spynner}>
      <Switch>
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path={routes.movies} component={MoviesPage} />;
        <Route path={routes.home} component={HomePage} />;
      </Switch>
    </Suspense>
  </div>
);

export default App;
