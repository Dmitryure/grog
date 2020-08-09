import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// Сделай так, чтобы имеющийся инпут обновлял стейт редакса и отражал в ul
// в редаксе должен быть объект с полем names (в store он уже прописан) и туда
// должны добавляться значения из input по нажатию кнопки

function Redux1() {
  const names = useSelector((state) => state.names);
  const [input, setInput] = useState('');

  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="button">Добавить</button>
      <ul>
        {/* подумай, почему не надо писать через && и подумай,
         в каком случае оператор бы понадобился */}
        {names.map((el) => <li>{el}</li>)}
      </ul>
    </>
  );
}

export default Redux1;
