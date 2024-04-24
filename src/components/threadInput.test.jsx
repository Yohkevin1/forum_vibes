/**
 * skenario testing
 *
 * - threadInput component
 *   - should handle title typing correctly
 *   - should handle body typing correctly
 *   - should handle category typing correctly
 *   - should call addThread function when add button is clicked
 */

import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import ThreadInput from './threadInput';

expect.extend(matchers);

describe('threadInput component', () => {
    afterEach(() => {
        cleanup();
    });

    it('should handle title typing correctly', async () => {
        render(<ThreadInput onAddThread={() => {}} />);
        const titleInput = screen.getByPlaceholderText('Masukkan judul');
        await userEvent.type(titleInput, 'Thread Title');
        expect(titleInput).toHaveValue('Thread Title');
    });

    it('should handle body typing correctly', async () => {
        render(<ThreadInput onAddThread={() => {}} />);
        const bodyInput = screen.getByPlaceholderText('Masukkan deskripsi');
        await userEvent.type(bodyInput, 'Thread Body');
        expect(bodyInput).toHaveValue('Thread Body');
    });

    it('should handle category typing correctly', async () => {
        render(<ThreadInput onAddThread={() => {}} />);
        const categoryInput = screen.getByPlaceholderText('Masukkan kategori');
        await userEvent.type(categoryInput, 'Thread Category');
        expect(categoryInput).toHaveValue('Thread Category');
    });

    it('should call addThread function when add button is clicked', async () => {
        const mockSubmitThread = vi.fn();
        render(<ThreadInput onAddThread={mockSubmitThread} />);
        const titleInput = await screen.getByPlaceholderText('Masukkan judul');
        await userEvent.type(titleInput, 'Thread Title');
        const bodyInput = await screen.getByPlaceholderText('Masukkan deskripsi');
        await userEvent.type(bodyInput, 'Thread Body');
        const categoryInput = await screen.getByPlaceholderText('Masukkan kategori');
        await userEvent.type(categoryInput, 'Thread Category');
        const addButton = await screen.getByText('Buat');

        // Action
        await userEvent.click(addButton);

        // Assert
        expect(mockSubmitThread).toBeCalledWith({
            title: 'Thread Title',
            body: 'Thread Body',
            category: 'Thread Category',
        });
    });
});
