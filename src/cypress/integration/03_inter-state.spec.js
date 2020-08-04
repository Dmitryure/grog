import {
  ROUTE_INTER_STATE,
} from '../../constants';

const logger = console;

describe('inter-state', () => {
  const text = 'privet';
  beforeEach(() => {
    cy.visit(ROUTE_INTER_STATE);
  });
  it('input can be modified', () => {
    cy.get('input')
      .type(text)
      .should('have.value', text);
  });
  it('button can be clicked', () => {
    cy.get('button').click();
  });
  it('after button is clicked new field is added', () => {
    cy.get('input').type(text);
    cy.get('button').click();
    cy.get('div');
  });
  it('multiple clicks create multiple divs', () => {
    cy.get('input').type(text);
    cy.get('button')
      .click()
      .click()
      .click();
    cy.get('button ~ div').should('have.length', 3);
  });
  it('added elements have correct format', () => {
    cy.get('input').type(text);
    cy.get('button')
      .click()
      .click()
      .click();
    cy.get('button ~ div').each((el, i) => {
      logger.log(cy.wrap(el));
      cy.wrap(el).should('have.text', String(i) + text + i);
    });
  });
});
