describe('Home Page', () => {
  it('displays loading state initially', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid=progress-card]').should('exist');

    cy.get('[data-testid=progress-card]').contains('กำลังประมวลผล');

    cy.wait(12000);

  });

  it('disables submit button when text area is empty', () => {
    cy.visit('http://localhost:3000');

    cy.wait(12000);

    cy.get('[data-testid=open-slide-over-button]').click();

    cy.get('[data-testid=submit-feedback-button]').should('be.disabled');
  });

  it('sends feedback successfully when text is entered', () => {
    cy.visit('http://localhost:3000');

    cy.wait(12000);

    cy.get('[data-testid=open-slide-over-button]').click();

    // Simulate user input
    cy.get('textarea').type('Test feedback');

    // Assert submit button is enabled after input
    cy.get('[data-testid=submit-feedback-button]').should('be.enabled');

    cy.get('[data-testid=submit-feedback-button]').click();

    cy.contains('ส่งข้อมูลสำเร็จ').should('exist');
  });

  it('closes slide over when close button is clicked', () => {
    cy.visit('http://localhost:3000');

    cy.wait(12000);

    cy.get('[data-testid=open-slide-over-button]').click();

    // Click on the close button
    cy.get('[data-testid=close-button]').click();

    cy.get('[data-testid=slide-over]').should('not.exist');
  });

  it('closes slide over when dragged to the drop zone', () => {
    cy.visit('http://localhost:3000');

    // Wait for 12 seconds
    cy.wait(12000);

    cy.get('[data-testid=open-slide-over-button]').click();

    // Get the drag and drop zones
    cy.get('[data-testid=drag-zone]').as('dragZone');
    cy.get('[data-testid=drop-zone]').as('dropZone');

    // Perform drag and drop
    cy.get('@dragZone').trigger('dragstart');
    cy.get('@dropZone').trigger('drop');

    cy.get('[data-testid=slide-over]').should('not.exist');
  });
});
