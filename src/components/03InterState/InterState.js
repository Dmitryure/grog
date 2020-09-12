import React, { useState } from "react";

// Создайте input в который можно вводить текст
// Создайте кнопку после нажатия на которую текст будет добавляться в стейт
// Для наглядности сделайте так, чтобы каждый элемент стейта выводился в
// каждый отдельный div как отдельное слово, окруженное своим индексом
// например: 0privet0, 1privet1 и так далее

const InterState = () => {
  const [state, setState] = useState("");
  const [result, setResult] = useState([]);
  function handleInput(event) {
    setState(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setResult([...result, state]);
    // setState("");
  }
  return (
    <>
      {/* <form onSubmit={handleSubmit}> */}
      <input name="text" onChange={handleInput} value={state}></input>
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
      {/* </form> */}

      {result &&
        result.map((element, index) => {
          return (
            <div>
              {index}
              {element}
              {index}
            </div>
          );
        })}
    </>
  );
};

export default InterState;
