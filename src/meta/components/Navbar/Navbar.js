import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  ROUTE_BASIC_FETCH,
  ROUTE_BASIC_STATE,
  ROUTE_INTER_STATE,
  ROUTE_INTER_FETCH,
} from '../../../constants';
import style from './Navbar.module.css';

function Navbar(props) {
  const { setShowModal } = props;
  return (
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
      <div onClick={() => setShowModal((state) => !state)} className={style.help}>?</div>
    </div>
  );
}

export default Navbar;
