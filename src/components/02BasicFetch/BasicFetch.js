import React, { useState, useEffect } from "react";
import { FETCH_URL_JSON_SERVER } from "../../constants";

// Сделайте запрос в базу данных FETCH_URL_JSON_SERVER
// Отрендерите каждый пост в листе в формате
// "Автор: Вася, title: привет"

function BasicFetch() {
  const [state, setState] = useState([]);
  useEffect(async () => {
    const result = await fetch(FETCH_URL_JSON_SERVER);
    const finalResult = await result.json();
    setState(finalResult);
  }, []);
  if (state.length) {
    state.map((element) => {
      console.log(element);
    });
  }
  return (
    <ul>
      {state.length &&
        state.map((element) => {
          return (
            <li>
              Автор:{element.name}, title:{element.title}
            </li>
          );
        })}
    </ul>
  );
}

export default BasicFetch;
