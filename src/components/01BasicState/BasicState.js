import React, { useState } from 'react';

// Создайте input в который можно вводить текст
// Затем создайте div в котором будет отображаться текст из инпута

const BasicState = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <input onChange={(e) => setValue(e.target.value)} type="text" />
      <div>{value}</div>
    </>
  );
};
export default BasicState;
