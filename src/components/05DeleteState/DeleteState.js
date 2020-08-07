import React, { useState } from 'react';
import Name from './components/Name';

// Сделай так, чтобы кнопки рядом с именами удаляли эти имена.
// Важно, что бы порядок удаления был соблюден,
// то есть кнопка рядом с Васей не удаляет Илью
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
