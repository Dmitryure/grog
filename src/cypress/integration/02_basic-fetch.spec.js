/* eslint-disable no-undef */
import {
  ROUTE_BASIC_FETCH,
} from '../../constants';

describe('basic-fetch', () => {
  beforeEach(() => {
    cy.visit(ROUTE_BASIC_FETCH);
  });
  it('List is not empty', () => {
    cy.get('ul > li').should('have.length', 4);
  });
  it('Every li tag has name and title', () => {
    cy.get('ul > li').each((el) => cy
      .wrap(el)
      .contains('автор', { matchCase: false })
      .contains('title', { matchCase: false }));
  });
});
