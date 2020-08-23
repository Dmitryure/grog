import React from 'react';

function Name(props) {
  const { name, id, setState } = props;

  return (
    <>
      <li>{name}</li>
      <button
        onClick={() => {
          setState((state) => state.filter((el) => id !== el.id));
        }}
        type="button"
      >
        Удалить

      </button>
    </>
  );
}

export default Name;
