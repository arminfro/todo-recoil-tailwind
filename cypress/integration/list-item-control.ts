describe('List Item Control should', () => {
  beforeEach('open menu', () => {
    cy.visit('localhost:3000')
      .as('app')
      .get('li')
      .first()
      .trigger('mouseover')
      .get('[data-test-id="list-item-ctl-btn"]')
      .as('ctl-btn')
      .click()
      .get('div[role="menu"]')
      .as('menu');
  });

  describe('should edit', () => {
    beforeEach(() => {
      cy.get('@menu').contains('button', 'Edit').click();
    });

    it('enter edit mode and save', () => {
      cy.get('@app')
        .get('li')
        .first()
        .get('input')
        .clear()
        .type('my new title')
        .get('textarea')
        .clear()
        .type('my new description')
        .get('@ctl-btn')
        .click()
        .get('@menu')
        .contains('button', 'Save')
        .click()
        .get('@app')
        .get('li')
        .first()
        .contains('h3', 'my new title')
        .get('@app')
        .get('li')
        .first()
        .contains('p', 'my new description');
    });

    it('cancel edit mode', () => {
      cy.get('@ctl-btn')
        .click()
        .get('@menu')
        .contains('button', 'Cancel')
        .click()
        .get('@app')
        .get('li')
        .first()
        .get('h3')
        .get('p');
    });
  });

  it('should complete', () => {
    cy.get('@menu')
      .contains('button', 'Complete')
      .click()
      .get('@app')
      .get('li')
      .first()
      .get('p')
      .should(
        'have.css',
        'text-decoration',
        'line-through solid rgb(31, 41, 55)',
      );
  });

  describe('should duplicate', () => {
    beforeEach(() => {
      cy.get('@menu').contains('button', 'Duplicate').click().get('@app');
    });

    it('should have same title', () => {
      cy.get('ul')
        .get('h3')
        .then(($h3s) => {
          const firstTodoTitle = $h3s[0].textContent;
          const lastTodoTitle = $h3s[$h3s.length - 1].textContent;
          async (req, res, ctx) => {
            const originalResponse = await ctx.fetch(req);
            return res((res) => {
              res.status = originalResponse.status;
              res.body = originalResponse.body;
              res.headers = originalResponse.headers as Headers;
              return res;
            });
          };
          expect(firstTodoTitle === lastTodoTitle).to.be.true;
        });
    });

    it('description shouldnt have text-decoration', () => {
      cy.get('@app')
        .get('li')
        .last()
        .get('p')
        .should('have.css', 'text-decoration', 'none solid rgb(31, 41, 55)');
    });
  });

  it('should delete', () => {
    cy.get('@menu')
      .contains('button', 'Delete')
      .click()
      .get('@app')
      .get('li')
      .should('have.length', 2);
  });
});
