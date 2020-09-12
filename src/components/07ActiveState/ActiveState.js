import React, { useState } from 'react';
import { Name } from './components/Name';

// Сделай так, чтобы по клику компонент Name окрашивался из красного цвета в зеленый
// Чтобы не ошибиться, в компонент Name уже были подключены классы
export const ActiveState = () => {
  const [list, setList] = useState(['Vasya', 'Petya', 'Grisha']);
  const [active, setActive] = useState('');

  function handleActivate(name) {
    setActive(name);
  }

  function check(el) {
    if (active === el) {
      return true;
    }
    return false;
  }

  return (
    <>
      <ul>
        {list.map((el) => (
          <Name status={check(el)} activate={handleActivate} name={el} />
        ))}
      </ul>
    </>
  );
};
