import React from 'react';
import { ExerciseRoute } from './components/ExerciseRoute/ExerciseRoute';

export const MainRouter = (props) => {
  const { list } = props;
  return (
    <>
      {list.map((el) => <ExerciseRoute {...el} />)}
    </>
  );
};
