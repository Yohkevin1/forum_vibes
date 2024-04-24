/**
 * asyncPreloadProcess action scenario test
 * - should dispatch action correctly when data fetching success
 * - dispatches the correct actions when fetching own profile fails
 */

import { describe, beforeEach, afterEach, it, vi, expect } from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { setAuthUserActionCreator } from '../authUser/action';
import { setIsPreloadActionCreator, asyncPreloadProcess } from './action';

const fakeAuthUser = {
    id: 'user-1',
    name: 'John Doe',
    email: 'lL6y5@example.com',
    avatar: 'https://generated-image-url.jpg',
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncPreloadProcess', () => {
    beforeEach(() => {
        api._getOwnProfile = api.getOwnProfile;
    });

    afterEach(() => {
        api.getOwnProfile = api._getOwnProfile;
        delete api._getOwnProfile;
    });

    it('should dispatch action correctly when data fetching success', async () => {
        api.getOwnProfile = () => Promise.resolve(fakeAuthUser);

        const dispatch = vi.fn();

        await asyncPreloadProcess()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeAuthUser));
        expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
    });

    it('dispatches the correct actions when fetching own profile fails', async () => {
        api.getOwnProfile = () => Promise.reject(fakeErrorResponse);

        const dispatch = vi.fn();

        window.alert = vi.fn();

        await asyncPreloadProcess()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(null));
        expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
    });
});