/**
 * - Register spec
 *   - should display register page correctly
 *   - should display alert when name is empty
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display login when name, email and password are correct
 */

describe('Register spec', () => {
    it('should display register page correctly', () => {
        cy.visit('http://localhost:5173/');

        cy.get('input[type="text"]').should('have.attr', 'placeholder', 'Name');
        cy.get('input[type="email"]').should('have.attr', 'placeholder', 'Email');
        cy.get('input[type="password"]').should('have.attr', 'placeholder', 'Password');
        cy.get('button').contains(/^Register$/).should('be.visible');
    });

    it('should display alert when name is empty', () => {
        cy.visit('http://localhost:5173/');
        cy.get('button').contains(/^Register$/).click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('"name" is not allowed to be empty');
        });
    });

    it('should display alert when email is empty', () => {
        cy.visit('http://localhost:5173/');
        cy.get('input[type="text"]').type('Kevin');
        cy.get('button').contains(/^Register$/).click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('"email" is not allowed to be empty');
        });
    });
});