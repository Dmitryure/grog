import React from 'react';
import style from './Circle.module.css';

function Circle(props) {
  const { index, setSelect, active } = props;
  return (
    <div
      className={`${style.circle} ${active ? style.active : null}`}
      onClick={(e) => {
        e.stopPropagation();
        setSelect((state) => index);
      }}
    />
  );
}

export default Circle;
