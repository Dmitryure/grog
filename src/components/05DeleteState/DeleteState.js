import React, { useState } from 'react';
import Name from './components/Name';

export default function DeleteState() {
  const [state, setState] = useState([{ name: 'Vasya', id: 1 }, { name: 'Petya', id: 2 }, { name: 'Ilya', id: 3 }]);
  return (
    <>
      <ul>
        {state.map((el) => <Name key={el.id} setState={setState} name={el.name} id={el.id} />)}
      </ul>
    </>
  );
}
