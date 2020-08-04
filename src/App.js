import React, { useState } from 'react';
import { useTransition } from 'react-spring';
import { Switch, Route } from 'react-router-dom';
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
import Modal from './meta/components/Modal/Modal';
import Navbar from './meta/components/Navbar/Navbar';

function App() {
  const [showModal, setShowModal] = useState(false);

  const transition = useTransition(showModal, null, {
    from: { right: '0px', opacity: 0 },
    enter: { right: '100px', opacity: 1 },
    leave: { right: '0px', opacity: 0 },
  });

  return (
    <>
      {transition.map(({ item, key, props: springStyle }) => (
        item && <Modal setShowModal={setShowModal} key={key} springStyle={springStyle} />
      ))}
      <div className={style.container}>
        <Navbar setShowModal={setShowModal} />
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
    </>
  );
}

export default App;
