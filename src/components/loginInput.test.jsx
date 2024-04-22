/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import LoginInput from './loginInput';

expect.extend(matchers);

describe('LoginInput component', () => {
    afterEach(() => {
        cleanup();
    });

    it('should handle email typing correctly', async () => {
        render(<LoginInput onLogin={() => {}} />);
        const emailInput = screen.getByPlaceholderText('Email');
        await userEvent.type(emailInput, 'Qp6KZ@example.com');
        expect(emailInput).toHaveValue('Qp6KZ@example.com');
    });

    it('should handle password typing correctly', async () => {
        render(<LoginInput onLogin={() => {}} />);
        const passwordInput = screen.getByPlaceholderText('Password');
        await userEvent.type(passwordInput, 'passwordtest');
        expect(passwordInput).toHaveValue('passwordtest');
    });

    it('should call login function when login button is clicked', async () => {
        const mockLogin = vi.fn();
        render(<LoginInput onLogin={mockLogin} />);
        const emailInput = await screen.getByPlaceholderText('Email');
        await userEvent.type(emailInput, 'Qp6KZ@example.com');
        const passwordInput = await screen.getByPlaceholderText('Password');
        await userEvent.type(passwordInput, 'passwordtest');
        const loginButton = await screen.getByText('Login');

        // Action
        await userEvent.click(loginButton);

        // Assert
        expect(mockLogin).toBeCalledWith({
            email: 'Qp6KZ@example.com',
            password: 'passwordtest',
        });
    });
});