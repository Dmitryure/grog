import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import {
  Route, useLocation, Redirect, Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  ROUTE_BASIC_STATE,
} from './constants';
import style from './App.module.css';
import Modal from './meta/components/Modal/Modal';
import Navbar from './meta/components/Navbar/Navbar';
import { store } from './completed/exampleRedux/redux/store';
import { usePrevious } from './meta/hooks/usePrevious';
import { exampleList, exerciseList } from './lists';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(null);
  const location = useLocation();
  const previousIndex = usePrevious(index);

  const modalTransition = useTransition(showModal, null, {
    from: { transform: 'translate3d(150px, 0px, 0px)', opacity: 0 },
    enter: { transform: 'translate3d(0px, 0px, 0px)', opacity: 1 },
    leave: { transform: 'translate3d(150px, 0px, 0px)', opacity: 0 },
  });

  const pageTransition = useTransition(location, (l) => l.pathname, {
    from: { opacity: -1.5, transform: previousIndex >= index ? 'translate3d(100%,0,0)' : 'translate3d(-100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: -1.5, transform: previousIndex < index ? 'translate3d(100%,0,0)' : 'translate3d(-100%,0,0)' },
  });

  return (
    <>
      {modalTransition.map(({ item, key, props: springStyle }) => (
        item && <Modal springStyle={springStyle} setShowModal={setShowModal} key={key} />
      ))}
      <div className={style.container}>
        <Navbar setIndex={setIndex} setShowModal={setShowModal} />
        {pageTransition.map(({ item, props, key }) => (
          <animated.div className={style.componentsContainer} style={props} key={key}>

            {/* EXAMPLES */}
            <Switch location={item}>
              <Provider store={store}>
                {exampleList.map((el) => {
                  const { mainRoute, additionalRoute, Component } = el;
                  return (
                    <Route exact path={`${mainRoute}${additionalRoute}`}>
                      <Component key={`${mainRoute}${additionalRoute}`} />
                    </Route>
                  );
                })}
              </Provider>
            </Switch>
            {/* Tasks */}
            <Switch location={item}>
              {exerciseList.map((el) => {
                const { mainRoute, additionalRoute, Component } = el;
                return (
                  <Route exact path={`${mainRoute}${additionalRoute}`}>
                    <Component key={`${mainRoute}${additionalRoute}`} />
                  </Route>
                );
              })}
            </Switch>
            <Route exact path="/">
              <Redirect to={ROUTE_BASIC_STATE} />
            </Route>
          </animated.div>
        ))}
      </div>
    </>
  );
}

export default App;
