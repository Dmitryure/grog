import React, { useState } from 'react';
import style from './Tipbox.module.css';
import Circle from './components/Circle';

function Tipbox(props) {
  const { data } = props;
  const [select, setSelect] = useState(0);
  return (
    <>
      <div className={style.selector}>
        {data && data.map((item, i) => <Circle key={item.id} setSelect={setSelect} index={i} />) }
      </div>
      <div className={style.tip}>{data[select].text}</div>
    </>
  );
}

export default Tipbox;
