import { ROUTE_REDUX1 } from '../../constants';

describe('redux-1', () => {
  const testvalue1 = 'hello';
  const testvalue2 = 'privet';
  beforeEach(() => {
    cy.visit(ROUTE_REDUX1);
  });
  it('store is present with name field', () => {
    cy.window().its('store').invoke('getState').its('names');
  });
  it('names are added to store', () => {
    cy.get('input').type(testvalue1);
    cy.get('button').click();
    cy.window().its('store').invoke('getState').its('names')
      .should('have.length', 1);
    cy.get('input').type(testvalue2);
    cy.get('button').click();
    cy.window().its('store').invoke('getState').its('names')
      .should('have.length', 2);
  });
  it('added names are displayed on page from the store\'s "names" field', () => {
    cy.get('input').type(testvalue1);
    cy.get('button').click();
    cy.get('input').clear();
    cy.get('input').type(testvalue2);
    cy.get('button').click();
    cy.get('ul').should('contain', testvalue1).and('contain', testvalue2);
    cy.window().its('store').invoke('getState').its('names')
      .should('deep.equal', [testvalue1, testvalue2]);
  });
});
