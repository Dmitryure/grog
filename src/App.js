import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import {
  Switch, Route, useLocation, Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import BasicFetch from './components/02BasicFetch/BasicFetch';
import BasicState from './components/01BasicState/BasicState';
import InterState from './components/03InterState/InterState';
import {
  ROUTE_BASIC_FETCH,
  ROUTE_BASIC_STATE,
  ROUTE_INTER_STATE,
  ROUTE_INTER_FETCH,
  ROUTE_DELETE_STATE,
  ROUTE_REDUX1, ROUTE_ACTIVE_STATE,
} from './constants';
import Examples from './completed/index';
import style from './App.module.css';
import InterFetch from './components/04InterFetch/InterFetch';
import Modal from './meta/components/Modal/Modal';
import Navbar from './meta/components/Navbar/Navbar';
import DeleteState from './components/05DeleteState/DeleteState';
import Redux1 from './components/06redux1/Redux1';
import { ActiveState } from './components/07ActiveState/ActiveState';
import { store } from './completed/exampleRedux/redux/store';
import { usePrevious } from './meta/hooks/usePrevious';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(null);
  const location = useLocation();
  const memoizedIndex = usePrevious(index);

  const modalTransition = useTransition(showModal, null, {
    from: { transform: 'translate3d(150px, 0px, 0px)', opacity: 0 },
    enter: { transform: 'translate3d(0px, 0px, 0px)', opacity: 1 },
    leave: { transform: 'translate3d(150px, 0px, 0px)', opacity: 0 },
  });

  const pageTransition = useTransition(location, (l) => l.pathname, {
    from: { opacity: 0, transform: memoizedIndex >= index ? 'translate3d(100%,0,0)' : 'translate3d(-100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: memoizedIndex < index ? 'translate3d(100%,0,0)' : 'translate3d(-100%,0,0)' },
  });

  return (
    <>
      {modalTransition.map(({ item, key, props: springStyle }) => (
        item && <Modal springStyle={springStyle} setShowModal={setShowModal} key={key} />
      ))}
      <div className={style.container}>
        <Navbar setIndex={setIndex} setShowModal={setShowModal} />
        {pageTransition.map(({ item, props, key }) => (
          //  Мясо - надо рефакторить
          <animated.div className={style.componentsContainer} style={props} key={key}>
            <Switch location={item}>
              {/* EXAMPLES */}
              <Provider store={store}>
                <Route exact path={`${ROUTE_BASIC_STATE}example`}>
                  <Examples.BasicState />
                </Route>
                <Route exact path={`${ROUTE_BASIC_FETCH}example`}>
                  <Examples.BasicFetch />
                </Route>
                <Route exact path={`${ROUTE_INTER_STATE}example`}>
                  <Examples.InterState />
                </Route>
                <Route exact path={`${ROUTE_DELETE_STATE}example`}>
                  <Examples.DeleteState />
                </Route>
                <Route exact path={`${ROUTE_ACTIVE_STATE}example`}>
                  <Examples.ActiveState />
                </Route>
                <Route exact path={`${ROUTE_REDUX1}example`}>
                  <Examples.Redux1 />
                </Route>
              </Provider>
            </Switch>
            {/* Tasks */}
            <Switch location={item}>
              <Route exact path="/">
                <Redirect to={ROUTE_BASIC_STATE} />
              </Route>
              <Route exact path={ROUTE_INTER_FETCH}>
                <InterFetch />
              </Route>
              <Route exact path={ROUTE_BASIC_STATE}>
                <BasicState />
              </Route>
              <Route exact path={ROUTE_BASIC_FETCH}>
                <BasicFetch />
              </Route>
              <Route exact path={ROUTE_INTER_STATE}>
                <InterState />
              </Route>
              <Route exact path={ROUTE_DELETE_STATE}>
                <DeleteState />
              </Route>
              <Route exact path={ROUTE_ACTIVE_STATE}>
                <ActiveState />
              </Route>
              <Route exact path={ROUTE_REDUX1}>
                <Redux1 />
              </Route>
            </Switch>
          </animated.div>
        ))}
      </div>
    </>
  );
}

export default App;
