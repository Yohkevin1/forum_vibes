/**
 * scenario test for leaderboardsReducer
 * - leaderboardsReducer function
 *   - should return initial state when action type is unknown
 *   - should return new state when action type is POPULATE_LEADERBOARDS
 */

import { describe, it, expect } from 'vitest';
import leaderboardsReducer from './reducer';

describe('leaderboardsReducer function', () => {
    it('should return initial state when action type is unknown', () => {
        const initialState = [];
        const action = { type: 'UNKNOWN' };

        const nextState = leaderboardsReducer(initialState, action);

        expect(nextState).toEqual(initialState);
    });

    it('should return new state when action type is POPULATE_LEADERBOARDS', () => {
        const initialState = [];
        const action = {
            type: 'POPULATE_LEADERBOARDS',
            payload: {
                leaderboards: [
                    {
                        user: {
                            id: 'users-1',
                            name: 'John Doe',
                            email: 'john@example.com',
                            avatar: 'https://generated-image-url.jpg',
                        },
                        score: 10,
                    },
                ],
            },
        };

        const nextState = leaderboardsReducer(initialState, action);

        expect(nextState).toEqual(action.payload.leaderboards);
    });
});