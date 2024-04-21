/**
 * skenario testing
 *
 * - registerInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import RegisterInput from './registerInput';

expect.extend(matchers);

describe('registerInput component', () => {
    afterEach(() => {
        cleanup();
    });

    it('should handle name typing correctly', async () => {
        render(<RegisterInput onRegister={() => {}} />);
        const nameInput = screen.getByPlaceholderText('Name');
        await userEvent.type(nameInput, 'John Doe');
        expect(nameInput).toHaveValue('John Doe');
    });

    it('should handle email typing correctly', async () => {
        render(<RegisterInput onRegister={() => {}} />);
        const emailInput = screen.getByPlaceholderText('Email');
        await userEvent.type(emailInput, 'Qp6KZ@example.com');
        expect(emailInput).toHaveValue('Qp6KZ@example.com');
    });

    it('should handle password typing correctly', async () => {
        render(<RegisterInput onRegister={() => {}} />);
        const passwordInput = screen.getByPlaceholderText('Password');
        await userEvent.type(passwordInput, 'passwordtest');
        expect(passwordInput).toHaveValue('passwordtest');
    });

    it('should call register function when register button is clicked', async () => {
        const mockRegister = vi.fn();
        render(<RegisterInput register={mockRegister} />);
        const nameInput = await screen.getByPlaceholderText('Name');
        await userEvent.type(nameInput, 'John Doe');
        const emailInput = await screen.getByPlaceholderText('Email');
        await userEvent.type(emailInput, 'Qp6KZ@example.com');
        const passwordInput = await screen.getByPlaceholderText('Password');
        await userEvent.type(passwordInput, 'passwordtest');
        const registerButton = await screen.getByRole('button', { name: 'Register' });

        await userEvent.click(registerButton);

        expect(mockRegister).toBeCalledWith({
            name: 'John Doe',
            email: 'Qp6KZ@example.com',
            password: 'passwordtest',
        });
    });
});