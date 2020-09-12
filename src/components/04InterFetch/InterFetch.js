import React, { useState } from 'react';
import {
  FETCH_URL_JSON_SERVER,
} from '../../constants';

// Создай форму c input и сделай запрос методом GET
// по адресу FETCH_URL_JSON_SERVER и параметру name(Вася|Петя|Иннокентий|Маша)
// то есть, чтобы получить инфу о Пете запрос должен выглядеть следующим образом
// fetch(${FETCH_URL_JSON_SERVER}?name=Вася) и отрендерить полученный результат
// в диве формате name: ... Title ...
// name: Вася Title: json-server

export default function InterFetch() {
  const [input, setInput] = useState('');
  const [divinfo, setDivInfo] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`${FETCH_URL_JSON_SERVER}?name=${input}`)
      .then((res) => res.json())
      .then((data) => setDivInfo(data[0]));
  }
  return (
    <>
      <form onSubmit={handleSubmit} method="get">
        <input name="input" onChange={(e) => setInput(e.target.value)} value={input} type="text" />
        <button type="submit">submit</button>
      </form>
      {divinfo && (
        <div>
          name:
          {divinfo.name}
          {' '}
          Title:
          {divinfo.title}
        </div>
      )}
    </>
  );
}
