import React, { useState } from 'react';

// Создайте input в который можно вводить текст
// Создайте кнопку после нажатия на которую текст будет добавляться в стейт
// Для наглядности сделайте так, чтобы каждый элемент стейта выводился в
// каждый отдельный div как отдельное слово, окруженное своим индексом
// например: 0privet0, 1privet1 и так далее

const InterState = () => {
  const [words, setWords] = useState([]);
  const [input, setInput] = useState('');

  function handleInput() {
    setWords([...words, input]);
    setInput('');
  }

  return (
    <>
      <input onChange={(e) => setInput(e.target.value)} value={input} type="text" name="" id="" />
      <button onClick={handleInput} type="button">Add</button>
      {words.map((word, index) => (
        <div key={index}>
          {index}
          {word}
          {index}
        </div>
      ))}
    </>
  );
};

export default InterState;
