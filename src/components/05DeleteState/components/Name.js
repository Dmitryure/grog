import React from 'react';

function Name(props) {
  const { name, del, id } = props;
  return (
    <>
      <li>{name}</li>
      <button onClick={() => del(id)} type="button">
        Удалить
      </button>
    </>
  );
}

export default Name;
