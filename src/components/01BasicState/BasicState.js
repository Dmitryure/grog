import React, { useState } from 'react';

// Создайте input в который можно вводить текст
// Затем создайте div в котором будет отображаться текст из инпута
const BasicState = () => {
  const [data, setData] = useState('');

  return (
    <>
      <input
        onChange={(e) => setData(e.target.value)}
      />
      <div>{data}</div>
    </>
  );
};

export default BasicState;
