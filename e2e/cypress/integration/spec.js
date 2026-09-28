it('loads page', () => {
  cy.visit('/')
  cy.contains('Hello World!')
})
