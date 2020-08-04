import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import BasicFetch from './components/02BasicFetch/BasicFetch';
import BasicState from './components/01BasicState/BasicState';
import InterState from './components/03InterState/InterState';
import Example from './components/00Example/Example';
import {
  ROUTE_BASIC_FETCH,
  ROUTE_BASIC_STATE,
  ROUTE_INTER_STATE,
  ROUTE_INTER_FETCH,
} from './constants';
import style from './App.module.css';
import InterFetch from './components/04InterFetch/InterFetch';

function App() {
  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <NavLink activeClassName={style.activeLink} exact to="/">
          Home
        </NavLink>
        <NavLink activeClassName={style.activeLink} to={ROUTE_BASIC_STATE}>
          {' '}
          {ROUTE_BASIC_STATE}
          {' '}
        </NavLink>
        <NavLink activeClassName={style.activeLink} to={ROUTE_BASIC_FETCH}>
          {' '}
          {ROUTE_BASIC_FETCH}
          {' '}
        </NavLink>
        <NavLink activeClassName={style.activeLink} to={ROUTE_INTER_STATE}>
          {' '}
          {ROUTE_INTER_STATE}
          {' '}
        </NavLink>
        <NavLink activeClassName={style.activeLink} to={ROUTE_INTER_FETCH}>
          {' '}
          {ROUTE_INTER_FETCH}
          {' '}
        </NavLink>
      </div>
      <div>
        <Switch>
          <Route path={ROUTE_INTER_FETCH}>
            <InterFetch />
          </Route>
          <Route path={ROUTE_BASIC_STATE}>
            <BasicState />
          </Route>
          <Route path={ROUTE_BASIC_FETCH}>
            <BasicFetch />
          </Route>
          <Route path={ROUTE_INTER_STATE}>
            <InterState />
          </Route>
          <Route to="/">
            <Example />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
