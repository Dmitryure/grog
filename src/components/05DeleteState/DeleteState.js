import React, { useState } from 'react';
import Name from './components/Name';

// Сделай так, чтобы кнопки рядом с именами удаляли эти имена.
// Важно, что бы порядок удаления был соблюден,
// то есть кнопка рядом с Васей не удаляет Илью
export default function DeleteState() {
  const [state, setState] = useState(['Vasya', 'Petya', 'Ilya', 'Vasya', 'Vasya']);
  function handleDelete(id) {
    const newState = [...state];
    newState.splice(id, 1);
    setState(newState);
  }
  return (
    <>
      <ul>
        {state.map((el, index) => (
          <Name key={index} id={index} del={(id) => handleDelete(id)} name={el} />
        ))}
      </ul>
    </>
  );
}
