/**
 * scenario test for commentReducer
 * - commentReducer function
 *   - should return initial state when action type is unknown
 *   - should return new state when action type is ADD_COMMENT
 */

import { describe, it, expect } from 'vitest';
import commentReducer from './reducer';

describe('commentReducer function', () => {
    it('should return initial state when action type is unknown', () => {
        const initialState = [];
        const action = { type: 'UNKNOWN' };

        const nextState = commentReducer(initialState, action);

        expect(nextState).toEqual(initialState);
    });

    it('should return new state when action type is ADD_COMMENT', () => {
        const initialState = [
            {
                id: 'comment-1',
                content: 'Ini adalah komentar pertama',
                createdAt: '2021-06-21T07:00:00.000Z',
                upVotesBy: [],
                downVotesBy: [],
                owner: {
                    id: 'users-1',
                    name: 'John Doe',
                    email: 'john@example.com',
                },
            },
        ];
        const action = {
            type: 'ADD_COMMENT',
            payload: {
                comment: {
                    id: 'comment-1',
                    content: 'Ini adalah komentar pertama',
                    createdAt: '2021-06-21T07:00:00.000Z',
                    upVotesBy: [],
                    downVotesBy: [],
                    owner: {
                        id: 'users-1',
                        name: 'John Doe',
                        email: 'john@example.com',
                    },
                },
            },
        };

        const nextState = commentReducer(initialState, action);

        expect(nextState).toEqual([action.payload.comment]);
    });
});