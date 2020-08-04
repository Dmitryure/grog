import React from 'react';

function Circle(props) {
  const { index, setSelect } = props;
  return (
    <div onClick={(e) => {
      e.stopPropagation();
      setSelect((state) => index);
    }}
    >
      {index}
    </div>
  );
}

export default Circle;
