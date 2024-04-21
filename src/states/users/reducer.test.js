/**
 * Scenario test for usersReducer
 * - usersReducer function
 *   - should return initial state when action type is unknown
 *   - should return new state when action type is RECEIVE_USERS
 */

import { describe, it, expect } from 'vitest';
import usersReducer from './reducer';

describe('usersReducer function', () => {
    it('should return initial state when action type is unknown', () => {
        const initialState = [];
        const action = { type: 'UNKNOWN' };

        const nextState = usersReducer(initialState, action);

        expect(nextState).toEqual(initialState);
    });

    it('should return new state when action type is RECEIVE_USERS', () => {
        const initialState = [];
        const action = {
            type: 'RECEIVE_USERS',
            payload: {
                users: [
                    {
                        id: 'users-1',
                        name: 'John Doe',
                        email: 'johndoe@me.com',
                        avatar: 'https://generated-image-url.jpg',
                    },
                ],
            },
        };

        const nextState = usersReducer(initialState, action);

        expect(nextState).toEqual(action.payload.users);
    });
});