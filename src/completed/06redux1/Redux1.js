import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addName } from '../../redux/actions';

// Сделай так, чтобы имеющийся инпут обновлял стейт редакса и отражал в ul
// в редаксе должен быть объект с полем names (в store он уже прописан) и туда
// должны добавляться значения из input по нажатию кнопки

function Redux1() {
  const dispatch = useDispatch();
  const names = useSelector((state) => state.names);
  const [input, setInput] = useState('');

  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="button" onClick={() => dispatch(addName(input))}>Добавить</button>
      <ul>
        {names.map((el) => <li>{el}</li>)}
      </ul>
    </>
  );
}

export default Redux1;
