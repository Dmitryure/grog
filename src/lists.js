import {
  baseHandle,
  exampleHandle,
  ROUTE_ACTIVE_STATE,
  ROUTE_BASIC_FETCH,
  ROUTE_BASIC_STATE,
  ROUTE_DELETE_STATE, ROUTE_INTER_FETCH, ROUTE_INTER_STATE, ROUTE_REDUX1,
} from './constants';
import Examples from './completed';
import BasicState from './components/01BasicState/BasicState';
import DeleteState from './components/05DeleteState/DeleteState';
import BasicFetch from './components/02BasicFetch/BasicFetch';
import { ActiveState } from './components/07ActiveState/ActiveState';
import InterFetch from './components/04InterFetch/InterFetch';
import Redux1 from './components/06redux1/Redux1';
import InterState from './components/03InterState/InterState';

export const exampleList = [
  { mainRoute: ROUTE_BASIC_STATE, additionalRoute: exampleHandle, Component: Examples.BasicState },
  { mainRoute: ROUTE_BASIC_FETCH, additionalRoute: exampleHandle, Component: Examples.BasicFetch },
  { mainRoute: ROUTE_ACTIVE_STATE, additionalRoute: exampleHandle, Component: Examples.ActiveState },
  { mainRoute: ROUTE_DELETE_STATE, additionalRoute: exampleHandle, Component: Examples.DeleteState },
  { mainRoute: ROUTE_INTER_FETCH, additionalRoute: exampleHandle, Component: Examples.InterFetch },
  { mainRoute: ROUTE_REDUX1, additionalRoute: exampleHandle, Component: Examples.Redux1 },
  { mainRoute: ROUTE_INTER_STATE, additionalRoute: exampleHandle, Component: Examples.InterState },
];

export const exerciseList = [
  { mainRoute: ROUTE_BASIC_STATE, additionalRoute: baseHandle, Component: BasicState },
  { mainRoute: ROUTE_BASIC_FETCH, additionalRoute: baseHandle, Component: BasicFetch },
  { mainRoute: ROUTE_ACTIVE_STATE, additionalRoute: baseHandle, Component: ActiveState },
  { mainRoute: ROUTE_DELETE_STATE, additionalRoute: baseHandle, Component: DeleteState },
  { mainRoute: ROUTE_INTER_FETCH, additionalRoute: baseHandle, Component: InterFetch },
  { mainRoute: ROUTE_REDUX1, additionalRoute: baseHandle, Component: Redux1 },
  { mainRoute: ROUTE_INTER_STATE, additionalRoute: baseHandle, Component: InterState },
];
