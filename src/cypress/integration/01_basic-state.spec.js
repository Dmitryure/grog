/* eslint-disable no-undef */
import {
  ROUTE_BASIC_STATE,
} from '../../constants';

describe('basic-state', () => {
  beforeEach(() => {
    cy.visit(ROUTE_BASIC_STATE);
  });
  it('input can be modified', () => {
    const text = 'privet';
    cy.get('input').type(text);
    cy.get('div').contains(text);
  });
});
