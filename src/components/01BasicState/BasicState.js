import React, { useState } from "react";

// Создайте input в который можно вводить текст
// Затем создайте div в котором будет отображаться текст из инпута
const BasicState = () => {
  const [state, setState] = useState("");
  function handleForm(element) {
    setState(element.target.value);
  }
  return (
    <>
      <div>{state}</div>
      <input name="name" onChange={handleForm} value={state}></input>
    </>
  );
};

export default BasicState;
