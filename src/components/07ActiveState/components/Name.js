import React from 'react';
import style from './Name.module.css';

export const Name = (props) => {
  const { name, activate, status } = props;

  return (
    <div onClick={() => activate(name)} className={`${style.notActive} ${status ? style.active : ''}`}>{name}</div>
  );
};
