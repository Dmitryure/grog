import React from "react";

function Name(props) {
  const { name, toChild, id } = props;

  return (
    <>
      <li>{name}</li>
      <button
        type="button"
        onClick={() => {
          toChild(id);
        }}
      >
        Удалить
      </button>
    </>
  );
}

export default Name;
