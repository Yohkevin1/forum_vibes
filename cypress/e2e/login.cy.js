/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email and password are wrong
 *   - should display homepage when email and password are correct
 */

describe('Login spec', () => {
    it('should display login page correctly', () => {
        cy.visit('http://localhost:5173/login');

        cy.get('input[type="email"]').should('have.attr', 'placeholder', 'Email');
        cy.get('input[type="password"]').should('have.attr', 'placeholder', 'Password');
        cy.get('button').contains(/^Login$/).should('be.visible');
    });

    it('should display alert when email is empty', () => {
        cy.visit('http://localhost:5173/login');
        cy.get('button').contains(/^Login$/).click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('"email" is not allowed to be empty');
        });
    });

    it('should display alert when password is empty', () => {
        cy.visit('http://localhost:5173/login');
        cy.get('input[type="email"]').type('Qp6KZ@example.com');
        cy.get('button').contains(/^Login$/).click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('"password" is not allowed to be empty');
        });
    });

    it('should display alert when email and password are wrong', () => {
        cy.visit('http://localhost:5173/login');
        cy.get('input[type="email"]').type('Qp6KZ@example.com');
        cy.get('input[type="password"]').type('passwordtest');
        cy.get('button').contains(/^Login$/).click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Wrong email or password');
        });
    });

    it('should display homepage when email and password are correct', () => {
        cy.visit('http://localhost:5173/login');
        cy.get('input[type="email"]').type('Kevin1@gmail.com');
        cy.get('input[type="password"]').type('Kevin123!');
        cy.get('button').contains(/^Login$/).click();
        cy.get('nav').contains(/^Home$/).should('be.visible');
        cy.get('button').contains('Sign out').should('be.visible');
    });
});