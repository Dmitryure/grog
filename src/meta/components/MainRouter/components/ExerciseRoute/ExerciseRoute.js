import React from 'react';
import { Route } from 'react-router-dom';

export const ExerciseRoute = (props) => {
  const { mainRoute, additionalRoute, Component } = props;
  return (
    <>
      <Route exact path={`${mainRoute}${additionalRoute}`}>
        <Component />
      </Route>
    </>
  );
};
