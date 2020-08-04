import React, { useState, useEffect } from 'react';
import { FETCH_URL_JSON_SERVER } from '../../constants';

// Сделайте запрос в базу данных FETCH_URL_JSON_SERVER
// Отрендерите каждый пост в листе в формате
// "Автор: Вася, title: привет"

function BasicFetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(FETCH_URL_JSON_SERVER)
      .then((resp) => resp.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <ul>
        {data
          && data.map((item) => (
            <li>
              Автор:
              {' '}
              {item.name}
              , title:
              {' '}
              {item.title}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default BasicFetch;
