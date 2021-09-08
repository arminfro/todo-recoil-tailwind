describe('my first test', () => {
  it('bla', () => {
    cy.visit('localhost:3000');
    expect(true).to.equal(true);
  });
});
