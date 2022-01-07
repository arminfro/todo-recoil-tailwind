describe('List Control should', () => {
  beforeEach('open menu', () => {
    cy.visit('localhost:3000')
      .as('app')
      .screenshot()
      .get('[data-test-id="list-control-btn"]')
      .as('list-ctl-btn')
      .click()
      .get('div[role="menu"]')
      .as('menu');
  });

  it('have a length of four control items', () => {
    cy.get('@menu').get('div[role="menuitem"]').should('have.length', 4);
  });

  describe('change view filter to', () => {
    it('only completed', () => {
      cy.get('@menu')
        .contains('button', 'Completed')
        .click()
        .get('@app')
        .get('li')
        .should('have.length', 1);
    });

    it('only uncompleted', () => {
      cy.get('@menu')
        .contains('button', 'Uncompleted')
        .click()
        .get('@app')
        .get('li')
        .should('have.length', 2);
    });

    it('all', () => {
      cy.get('@menu')
        .contains('button', 'All')
        .click()
        .get('@app')
        .get('li')
        .should('have.length', 3);
    });
  });

  describe('open create modal', () => {
    beforeEach(() => {
      cy.get('@menu')
        .contains('button', 'Create')
        .click()
        .get('div[data-test-id="create-modal"]')
        .as('modal');
    });

    describe('takes input', () => {
      beforeEach(() => {
        cy.get('@modal')
          .get('input')
          .type('my new todo title')
          .get('textarea')
          .type('my new todo description');
      });

      it('saves input, new todo appears in list', () => {
        cy.get('@modal')
          .contains('button', 'Add Todo')
          .click()
          .get('@app')
          .contains('h3', 'my new todo title');
      });

      it('cancels inputs, inputs get resetted', () => {
        cy.get('@modal')
          .contains('button', 'Cancel')
          .click()
          .get('@list-ctl-btn')
          .click()
          .get('@menu')
          .contains('button', 'Create')
          .click()
          .get('input')
          .should('have.value', '')
          .get('textarea')
          .should('have.value', '');
      });
    });
  });
});
