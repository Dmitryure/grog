import React, { useState, useEffect } from 'react';
import { FETCH_URL_JSON_SERVER } from '../../constants';

// Пример задания: сделайте запрос по ручке(FETCH_URL_JSON_SERVER)
// Отрисуйте пришедшее имя в формате "Имя: Вася"(EXAMPLE_CLASS)

const Example = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${FETCH_URL_JSON_SERVER}/1`)
      .then((resp) => resp.json())
      .then((json) => setData(json));
  }, [setData]);

  return <div>{data && `Имя: ${data.name}`}</div>;
};

export default Example;
