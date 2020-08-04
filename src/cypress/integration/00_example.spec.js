describe('example works', () => {
  it('vasya displays correctly', () => {
    cy.visit('/');
    cy.contains('Имя: Вася');
  });
});
