import React from 'react';

function Name(props) {
  const { name } = props;

  return (
    <>
      <li>{name}</li>
      <button type="button">
        Удалить
      </button>
    </>
  );
}

export default Name;
