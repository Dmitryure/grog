import React, { useState } from 'react';
import style from './Tipbox.module.css';
import Circle from './components/Circle';

function Tipbox(props) {
  const { data } = props;
  const [select, setSelect] = useState(0);
  return (
    <>
      <div className={style.selector}>
        {data && data.map((item, i) => <Circle active={select === i} key={item.id} setSelect={setSelect} index={i} />)}
      </div>
      <div dangerouslySetInnerHTML={{ __html: data[select].text }} className={style.tip} />
    </>
  );
}

export default Tipbox;
