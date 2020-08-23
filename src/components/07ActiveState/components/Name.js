import React from 'react';
import style from './Name.module.css';

export const Name = (props) => {
  const { name } = props;
  return (
    <div className={style.notActive}>{name}</div>
  );
};
