describe('Login features ', () => {
  before(() => {

    cy.fixture('user').as('userData');
  });

  it('should log into the account', function() {
    // Use the custom command to log in
    cy.login(this.userData.username, this.userData.password);

    
    cy.url().should('include', '/dashboard'); 
    cy.contains('Dashboard'); // Check for a specific element that indicates a successful login
  });
});