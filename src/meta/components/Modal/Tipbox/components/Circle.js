import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import style from './Circle.module.css';

function Circle(props) {
  const { index, setSelect, active } = props;

  const [spring, set] = useSpring(() => ({ backgroundColor: !active ? '#13ff95' : '#3fe698' }));
  useEffect(() => {
    set({ backgroundColor: !active ? '#13ff95' : '#3fe698' });
  }, [active, set]);
  return (
    <div
      className={style.circleContainer}
      onClick={(e) => {
        e.stopPropagation();
        setSelect(() => index);
      }}
      onMouseEnter={() => set({ backgroundColor: '#3fe698' })}
      onMouseLeave={() => set({ backgroundColor: !active ? '#13ff95' : '#3fe698' })}
    >
      <animated.div
        className={style.circle}
        style={{ backgroundColor: spring.backgroundColor }}
      />
    </div>
  );
}

export default Circle;
