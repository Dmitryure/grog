import React, { useState } from 'react';

// Создайте input в который можно вводить текст
// Создайте кнопку после нажатия на которую текст будет добавляться в стейт
// Для наглядности сделайте так, чтобы каждый элемент стейта выводился в
// каждый отдельный div как отдельное слово, окруженное своим индексом
// например: 0privet0, 1privet1 и так далее

const InterState = () => {
  const [input, setInput] = useState('');
  const [words, setWords] = useState([]);

  return (
    <>
      <input
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="button"
        onClick={() => setWords((state) => [...state, input])}
      >
        Добавить
      </button>
      {words
        && words.map((item, i) => (
          <div>
            {i}
            {item}
            {i}
          </div>
        ))}
    </>
  );
};

export default InterState;
