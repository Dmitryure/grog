import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  ROUTE_BASIC_FETCH,
  ROUTE_BASIC_STATE,
  ROUTE_INTER_STATE,
  ROUTE_INTER_FETCH,
  ROUTE_DELETE_STATE,
  ROUTE_REDUX1,
} from '../../../constants';
import style from './Navbar.module.css';

function Navbar(props) {
  const { setShowModal } = props;
  return (
    <div className={style.navbar}>
      <NavLink activeClassName={style.activeLink} exact to="/">
        Example
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
      <NavLink activeClassName={style.activeLink} to={ROUTE_DELETE_STATE}>
        {ROUTE_DELETE_STATE}
      </NavLink>
      <NavLink activeClassName={style.activeLink} to={ROUTE_REDUX1}>
        {ROUTE_REDUX1}
      </NavLink>
      <div onClick={() => setShowModal((state) => !state)} className={style.help}>?</div>
    </div>
  );
}

export default Navbar;
