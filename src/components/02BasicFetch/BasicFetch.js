import React, { useState, useEffect } from 'react';
import { FETCH_URL_JSON_SERVER } from '../../constants';

// Сделайте запрос в базу данных FETCH_URL_JSON_SERVER
// Отрендерите каждый пост в листе в формате
// "Автор: Вася, title: привет"
// {id: 1, title: "json-server", name: "Вася"}

function BasicFetch() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    fetch(FETCH_URL_JSON_SERVER)
      .then((res) => res.json(res))
      .then((data) => setPosts(data));
  }, []);
  return (
    posts
      ? (
        <ul>
          {posts.map((post) => (
            <li key={posts.id}>
              Автор:
              {post.name}
              , title:
              {post.title}
            </li>
          ))}
        </ul>
      )
      : 'Loading...'
  );
}

export default BasicFetch;
