import React, { useState } from "react";
import { Name } from "./components/Name";

// Сделай так, чтобы по клику компонент Name окрашивался из красного цвета в зеленый
// Чтобы не ошибиться, в компонент Name уже были подключены классы
export const ActiveState = () => {
  const [list, setList] = useState([
    { name: "Vasya", color: false },
    { name: "Petya", color: false },
    { name: "Grisha", color: false },
  ]);

  function turn(name) {
    setList(
      list.map((element) => {
        return element.name === name
          ? { ...element, color: !element.color }
          : { ...element, color: false };
      })
    );
  }

  return (
    <>
      <ul>
        {list.map((el) => (
          <Name name={el.name} color={el.color} func={turn} />
        ))}
      </ul>
    </>
  );
};
