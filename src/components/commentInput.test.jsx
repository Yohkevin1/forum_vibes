/**
 * skenario testing
 *
 * - commentInput component
 *   - should handle content typing correctly
 *   - should call add function when login button is clicked
 */

import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import CommentInput from './commentInput';

expect.extend(matchers);

describe('CommentInput component', () => {
    afterEach(() => {
        cleanup();
    });

    it('should handle content typing correctly', async () => {
        render(<CommentInput submitComment={() => {}} />);
        const contentInput = screen.getByPlaceholderText('Tulis komentar...');
        await userEvent.type(contentInput, 'test');
        expect(contentInput).toHaveValue('test');
    });

    it('should call add function when login button is clicked', async () => {
        const mockSubmitComment = vi.fn();
        render(<CommentInput submitComment={mockSubmitComment} />);
        const contentInput = await screen.getByPlaceholderText('Tulis komentar...');
        await userEvent.type(contentInput, 'test');
        const submitButton = await screen.getByText('Kirim');
        await userEvent.click(submitButton);
        expect(mockSubmitComment).toBeCalledWith({content: 'test'});
    });
});