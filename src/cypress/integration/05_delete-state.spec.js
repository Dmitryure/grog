import { ROUTE_DELETE_STATE } from '../../constants';

describe('delete-state', () => {
  beforeEach(() => {
    cy.visit(ROUTE_DELETE_STATE);
  });
  it('list is present', () => {
    cy.get('ul').contains('Vasya');
    cy.get('ul').contains('Petya');
    cy.get('ul').contains('Ilya');
  });
  it('has 5 buttons', () => {
    cy.get('button').should('have.length', 5);
  });
  it('clicking all buttons leaves no ul', () => {
    // click with multiple flag bugs on mac
    cy.get('button').eq(0).click();
    cy.get('button').eq(0).click();
    cy.get('button').eq(0).click();
    cy.get('button').eq(0).click();
    cy.get('button').eq(0).click();
    cy.get('li').should('not.exist');
  });
  it('clicking on name should delete the name', () => {
    cy.get('button').eq(1).click();
    cy.get('ul').contains('Petya').should('not.exist');
    cy.get('button').eq(1).click();
    cy.get('ul').contains('Ilya').should('not.exist');
  });
  it('clicking on one name does not delete items with same names', () => {
    cy.get('button').eq(0).click();
    cy.get('li').should('have.length', 4);
  });
});
