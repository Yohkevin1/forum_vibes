/*
Scenario test for threadsReducer

- threadsReducer function
    - should return initial state when action type is unknown
    - should return new state when action type is RECEIVE_THREADS
    - should return new state when action type is ADD_THREAD
    - should return new state when action type is TOGGLE_UP_VOTE_THREAD
    - should return new state when action type is TOGGLE_DOWN_VOTE_THREAD
    - should return new state when action type is TOGGLE_NEUTRAL_VOTE_THREAD
*/

import { describe, it, expect } from 'vitest';
import threadsReducer from './reducer';

describe('threadsReducers function', () => {
    it('should return initial state when action type is unknown', () => {
        const initialState = [];
        const action = { type: 'UNKNOWN' };

        const nextState = threadsReducer(initialState, action);

        expect(nextState).toEqual(initialState);
    });

    it('should return new state when action type is RECEIVE_THREADS', () => {
        const initialState = [];
        const action = {
            type: 'RECEIVE_THREADS',
            payload: {
                threads: [
                    {
                        id: 'thread-1',
                        title: 'Thread Pertama',
                        body: 'Ini adalah thread pertama',
                        category: 'General',
                        createdAt: '2021-06-21T07:00:00.000Z',
                        ownerId: 'users-1',
                        upVotesBy: [],
                        downVotesBy: [],
                        totalComments: 0,
                    },
                    {
                        id: 'thread-2',
                        title: 'Thread Kedua',
                        body: 'Ini adalah thread kedua',
                        category: 'General',
                        createdAt: '2021-06-22T07:00:00.000Z',
                        ownerId: 'users-1',
                        upVotesBy: [],
                        downVotesBy: [],
                        totalComments: 0,
                    },
                ],
            },
        };

        const nextState = threadsReducer(initialState, action);

        expect(nextState).toEqual(action.payload.threads);
    });

    it('should return new state when action type is ADD_THREAD', () => {
        const initialState = [
            {
                id: 'thread-1',
                title: 'Thread Pertama',
                body: 'Ini adalah thread pertama',
                category: 'General',
                createdAt: '2021-06-21T07:00:00.000Z',
                ownerId: 'users-1',
                upVotesBy: [],
                downVotesBy: [],
                totalComments: 0,
            },
        ];
        const action = {
            type: 'ADD_THREAD',
            payload: {
                thread: {
                    id: 'thread-2',
                    title: 'Thread Kedua',
                    body: 'Ini adalah thread kedua',
                    category: 'General',
                    createdAt: '2021-06-22T07:00:00.000Z',
                    ownerId: 'users-1',
                    upVotesBy: [],
                    downVotesBy: [],
                    totalComments: 0,
                },
            },
        };

        const nextState = threadsReducer(initialState, action);

        expect(nextState).toEqual([...initialState, action.payload.thread]);
    });

    it('should return new state when action type is TOGGLE_UP_VOTE_THREAD', () => {
        const initialState = [
            {
                id: 'thread-1',
                title: 'Thread Pertama',
                body: 'Ini adalah thread pertama',
                category: 'General',
                createdAt: '2021-06-21T07:00:00.000Z',
                ownerId: 'users-1',
                upVotesBy: [],
                downVotesBy: [],
                totalComments: 0,
            },
        ];
        const action = {
            type: 'TOGGLE_UP_VOTE_THREAD',
            payload: {
                threadId: 'thread-1',
                userId: 'users-1',
            },
        };

        const nextState = threadsReducer(initialState, action);

        expect(nextState).toEqual([
            {
                ...initialState[0],
                upVotesBy: [action.payload.userId],
            },
        ]);
    });

    it('should return new state when action type is TOGGLE_DOWN_VOTE_THREAD', () => {
        const initialState = [
            {
                id: 'thread-1',
                title: 'Thread Pertama',
                body: 'Ini adalah thread pertama',
                category: 'General',
                createdAt: '2021-06-21T07:00:00.000Z',
                ownerId: 'users-1',
                upVotesBy: [],
                downVotesBy: [],
                totalComments: 0,
            },
        ];
        const action = {
            type: 'TOGGLE_DOWN_VOTE_THREAD',
            payload: {
                threadId: 'thread-1',
                userId: 'users-1',
            },
        };

        const nextState = threadsReducer(initialState, action);

        expect(nextState).toEqual([
            {
                ...initialState[0],
                downVotesBy: [action.payload.userId],
            },
        ]);
    });
});