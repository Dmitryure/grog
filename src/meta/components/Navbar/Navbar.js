import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  ROUTE_BASIC_FETCH,
  ROUTE_BASIC_STATE,
  ROUTE_INTER_STATE,
  ROUTE_INTER_FETCH,
  ROUTE_DELETE_STATE,
  ROUTE_REDUX1, ROUTE_ACTIVE_STATE,
} from '../../../constants';
import style from './Navbar.module.css';

const navbarData = [
  ROUTE_BASIC_STATE,
  ROUTE_BASIC_FETCH,
  ROUTE_INTER_STATE,
  ROUTE_INTER_FETCH,
  ROUTE_DELETE_STATE,
  ROUTE_ACTIVE_STATE,
  ROUTE_REDUX1,
];

function Navbar(props) {
  const location = useLocation();
  const { setShowModal, setIndex } = props;
  const exampleOpened = location.pathname.includes('example');
  return (
    <div className={style.navbar}>
      {navbarData.map((el, index) => (
        <NavLink activeClassName={style.activeLink} to={el}>
          {' '}
          <div onClick={() => setIndex(index)}>
            {el}
          </div>
          {' '}
        </NavLink>
      ))}
      <Link className={`${style.help} ${exampleOpened ? style.activeExample : ''}`} to={`${location.pathname}example`}>
        <div onClick={() => setShowModal(false)}>
          !
        </div>
      </Link>
      <div onClick={() => setShowModal((state) => !state)} style={{ pointerEvents: exampleOpened ? 'none' : 'all' }} className={style.help}>?</div>
    </div>
  );
}

export default Navbar;
