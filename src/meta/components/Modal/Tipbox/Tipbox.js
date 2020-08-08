import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import style from './Tipbox.module.css';
import Circle from './components/Circle';

function Tipbox(props) {
  const { data } = props;
  const location = useLocation();
  const [select, setSelect] = useState(0);

  useEffect(() => {
    setSelect(0);
  }, [location.pathname]);

  return (
    <>
      <div className={style.selector}>
        {data && data.map((item, i) => <Circle active={select === i} key={item.id} setSelect={setSelect} index={i} />)}
      </div>
      <div dangerouslySetInnerHTML={{ __html: data[select] && data[select].text }} className={style.tip} />
    </>
  );
}

export default Tipbox;
