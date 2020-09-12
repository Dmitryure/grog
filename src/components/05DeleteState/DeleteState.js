import React, { useState } from "react";
import Name from "./components/Name";

// Сделай так, чтобы кнопки рядом с именами удаляли эти имена.
// Важно, что бы порядок удаления был соблюден,
// то есть кнопка рядом с Васей не удаляет Илью
export default function DeleteState() {
  const [state, setState] = useState([
    { name: "Vasya", id: 1 },
    { name: "Petya", id: 2 },
    { name: "Ilya", id: 3 },
    { name: "Vasya", id: 4 },
    { name: "Vasya", id: 5 },
  ]);
  let child = (id) => {
    setState(
      state.filter((element) => {
        return element.id != id;
      })
    );
  };
  return (
    <>
      <ul>
        {state.map((el) => (
          <Name name={el.name} id={el.id} key={el.id} toChild={child} />
        ))}
      </ul>
    </>
  );
}
