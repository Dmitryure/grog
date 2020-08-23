import React from 'react';
import style from './Name.module.css';

export const Name = (props) => {
  const {
    active, setActive, id, name,
  } = props;
  return (
    <div onClick={() => setActive(id)} className={`${style.notActive} ${active && style.active}`}>{name}</div>
  );
};
