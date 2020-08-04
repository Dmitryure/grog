import React from 'react';
import { animated } from 'react-spring';
import { useLocation } from 'react-router-dom';
import style from './Modal.module.css';
import tips from '../../../tips';
import Tipbox from './Tipbox/Tipbox';

function Modal(props) {
  const { springStyle, setShowModal } = props;
  const location = useLocation();
  return (
    <animated.div
      onClick={() => { setShowModal((state) => !state); }}
      className={style.modal}
      style={springStyle}
    >
      {tips[location.pathname] && <Tipbox data={tips[location.pathname]} />}
    </animated.div>
  );
}

export default Modal;
