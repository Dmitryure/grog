import React, { useState, useEffect } from "react";
import { FETCH_URL_JSON_SERVER } from "../../constants";

// Создай форму c input и сделай запрос методом GET
// по адресу FETCH_URL_JSON_SERVER и параметру name(Вася|Петя|Иннокентий|Маша)
// то есть, чтобы получить инфу о Пете запрос должен выглядеть следующим образом
// fetch(${FETCH_URL_JSON_SERVER}?name=Вася) и отрендерить полученный результат
// в диве формате name: ... Title ...

export default function InterFetch() {
  const [state, setState] = useState("");
  const [info, setInfo] = useState(null);
  function handleChange(event) {
    event.preventDefault();
    setState(event.target.value);
  }

  async function handleClick(event) {
    event.preventDefault();
    const response = await fetch(`${FETCH_URL_JSON_SERVER}?name=${state}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const finalResult = await response.json();
    setInfo(finalResult[0]);
  }

  return (
    <>
      <form onSubmit={handleClick}>
        <input name="name" onChange={handleChange} value={state} />
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
      {info ? (
        <div>
          name: {info.name} Title: {info.title}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
