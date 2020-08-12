/* eslint-disable no-undef */
import {
  ROUTE_INTER_FETCH,
} from '../../constants';

describe('inter-fetch', () => {
  const testValue = 'Вася';
  beforeEach(() => {
    cy.visit(ROUTE_INTER_FETCH);
  });
  it('form is present', () => {
    cy.get('form');
  });
  it('form has an input', () => {
    cy.get('form').within(() => {
      cy.get('input[value]');
    });
  });
  it('input is valid', () => {
    cy.get('input[value]')
      .type(testValue)
      .should('have.value', testValue);
  });
  it('form submission does not reload the page', () => {
    cy.get('input[value]').type(testValue);
    cy.get('form').submit();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq(ROUTE_INTER_FETCH);
    });
  });
  it('submitting forms yields result in proper format', () => {
    cy.get('input[value]').type(testValue);
    cy.get('form').submit();
    cy.get('div')
      .contains(testValue)
      .contains('title', { matchCase: false })
      .contains('name', { matchCase: false });
  });
});
