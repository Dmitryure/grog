import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addName } from '../../redux/actions';

// Сделай так, чтобы имеющийся инпут обновлял стейт редакса и отражал это в ul
// в редаксе должен быть объект с полем names (в store он уже прописан) и туда
// должны добавляться значения из input по нажатию кнопки

function Redux1() {
  const names = useSelector((state) => state.names);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  function handleClick() {
    dispatch(addName(input));
  }

  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleClick} type="button">Добавить</button>
      <ul>
        {/* подумай, почему не надо писать через && и подумай,
         в каком случае оператор бы понадобился */}
        {names.map((el) => <li>{el}</li>)}
      </ul>
    </>
  );
}

export default Redux1;
