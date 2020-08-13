import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import style from './Circle.module.css';

function Circle(props) {
  const { index, setSelect, active } = props;

  const [spring, set] = useSpring(() => ({ backgroundColor: !active ? '#4520AB' : '#29EDFF' }));
  useEffect(() => {
    set({ backgroundColor: !active ? '#4520AB' : '#29EDFF' });
  }, [active, set]);
  return (
    <div
      className={style.circleContainer}
      onClick={(e) => {
        e.stopPropagation();
        setSelect(() => index);
      }}
      onMouseEnter={() => set({ backgroundColor: '#29EDFF' })}
      onMouseLeave={() => set({ backgroundColor: !active ? '#4520AB' : '#29EDFF' })}
    >
      <animated.div
        className={style.circle}
        style={{ backgroundColor: spring.backgroundColor }}
      />
    </div>
  );
}

export default Circle;
