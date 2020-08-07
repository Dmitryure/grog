import React, { useState } from 'react';
import Name from './components/Name';

export default function DeleteState() {
  const [state, setState] = useState(['Vasya', 'Petya', 'Ilya']);
  return (
    <>
      <ul>
        {state.map((el) => <Name name={el} />)}
      </ul>
    </>
  );
}
