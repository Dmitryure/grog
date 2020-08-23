import React, { useState } from 'react';
import { Name } from './components/Name';

export const ActiveState = (props) => {
  const [list] = useState([
    { name: 'Vasya', id: 1 },
    { name: 'privet', id: 2 },
    { name: 'hello', id: 3 },
  ]);
  const [active, setActive] = useState(null);

  return (
    <>
      <ul>
        {list.map((el) => (
          <Name
            key={el.id}
            active={active === el.id}
            name={el.name}
            id={el.id}
            setActive={setActive}
          />
        ))}
      </ul>
    </>
  );
};
