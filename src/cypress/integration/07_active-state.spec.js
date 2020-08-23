import { ROUTE_ACTIVE_STATE } from '../../constants';

describe('active-state', () => {
  beforeEach(() => {
    cy.visit(ROUTE_ACTIVE_STATE);
  });
  it('initially, there are 3 non-active items', () => {
    cy.get('ul').children().should('have.length', 3).each(($el) => {
      cy.wrap($el).should('have.css', 'background-color', 'rgb(255, 0, 0)');
    });
  });
  it('clicking on an item highlights it', () => {
    cy.get('ul').children().eq(0).click()
      .should('have.css', 'background-color', 'rgb(0, 128, 0)');
  });
  it('only one item can be highlighted at a time', () => {
    cy.get('ul').children().eq(0).click()
      .should('have.css', 'background-color', 'rgb(0, 128, 0)');
    cy.get('ul').children().eq(1).should('have.css', 'background-color', 'rgb(255, 0, 0)');
    cy.get('ul').children().eq(2).should('have.css', 'background-color', 'rgb(255, 0, 0)');
  });
  it('clicking on a different items hightlights correct items', () => {
    cy.get('ul').children().eq(0).click()
      .should('have.css', 'background-color', 'rgb(0, 128, 0)');
    cy.get('ul').children().eq(1).should('have.css', 'background-color', 'rgb(255, 0, 0)');
    cy.get('ul').children().eq(2).should('have.css', 'background-color', 'rgb(255, 0, 0)');
    cy.get('ul').children().eq(1).click()
      .should('have.css', 'background-color', 'rgb(0, 128, 0)');
    cy.get('ul').children().eq(0).should('have.css', 'background-color', 'rgb(255, 0, 0)');
    cy.get('ul').children().eq(2).should('have.css', 'background-color', 'rgb(255, 0, 0)');
    cy.get('ul').children().eq(2).click()
      .should('have.css', 'background-color', 'rgb(0, 128, 0)');
    cy.get('ul').children().eq(1).should('have.css', 'background-color', 'rgb(255, 0, 0)');
    cy.get('ul').children().eq(0).should('have.css', 'background-color', 'rgb(255, 0, 0)');
    cy.get('ul').children().eq(0).click()
      .should('have.css', 'background-color', 'rgb(0, 128, 0)');
    cy.get('ul').children().eq(1).should('have.css', 'background-color', 'rgb(255, 0, 0)');
    cy.get('ul').children().eq(2).should('have.css', 'background-color', 'rgb(255, 0, 0)');
  });
});
