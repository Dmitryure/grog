import React, { useState } from 'react';
import {
  FETCH_URL_JSON_SERVER,
} from '../../constants';

// Создай форму c input и сделай запрос методом GET
// по адресу FETCH_URL_JSON_SERVER и параметру name(Вася|Петя|Иннокентий|Маша)
// то есть, чтобы получить инфу о Пете запрос должен выглядеть следующим образом
// fetch(${FETCH_URL_JSON_SERVER}?name=Вася) и отрендерить полученный результат
// в диве формате name: ... Title ...

export default function InterFetch() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetch(`${FETCH_URL_JSON_SERVER}/?name=${value}`)
            .then((resp) => resp.json())
            .then((data) => setResult(data[0]));
        }}
      >
        <input
          name="name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input type="submit" />
      </form>
      <div>
        {result && `name: ${result.name} Title: ${result.title}`}
      </div>
    </>
  );
}
