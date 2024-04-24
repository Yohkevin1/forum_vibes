/**
 * authUser action scenario test
 *  - should dispatch action correctly when data fetching success
 *  -should dispatch action correctly when data fetching failed
 *
 * asyncUnsetAuthUser scenario test
 *  - should dispatch action correctly when data fetching success
 */

import { describe, beforeEach, afterEach, it, vi, expect } from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncSetAuthUser, asyncUnsetAuthUser, setAuthUserActionCreator, unsetAuthUserActionCreator } from './action';

const fakeAuthUser = {
    id: 'user-1',
    name: 'John Doe',
    email: 'lL6y5@example.com',
    avatar: 'https://generated-image-url.jpg',
};

const fakeItemLogin = {
    email: 'lL6y5@example.com',
    password: 'secret',
};

const fakeToken = 'fake-token';

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('authUser action', () => {
    beforeEach(() => {
        api._login = api.login;
        api._getOwnProfile = api.getOwnProfile;
        api._putAccessToken = api.putAccessToken;
    });

    afterEach(() => {
        api.login = api._login;
        api.getOwnProfile = api._getOwnProfile;
        api.putAccessToken = api._putAccessToken;
        delete api._login;
        delete api._getOwnProfile;
        delete api._putAccessToken;
    });

    it('should dispatch action correctly when data fetching success', async () => {
        api.login = () => Promise.resolve(fakeItemLogin);
        api.getOwnProfile = () => Promise.resolve(fakeAuthUser);
        api.putAccessToken = () => Promise.resolve(fakeToken);

        const dispatch = vi.fn();

        await asyncSetAuthUser({ email: 'lL6y5@example.com', password: 'secret' })(dispatch);

        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeAuthUser));
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
    });

    it('should dispatch action correctly when data fetching failed', async () => {
        api.login = () => Promise.reject(fakeErrorResponse);
        api.getOwnProfile = () => Promise.resolve();
        api.putAccessToken = () => Promise.resolve();

        const dispatch = vi.fn();

        window.alert = vi.fn();

        await asyncSetAuthUser({ email: 'lL6y5@example.com', password: 'secret' })(dispatch);

        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
        expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    });
});

describe('asyncUnsetAuthUser', () => {
    it('should dispatch action correctly when data fetching success', async () => {
        const dispatch = vi.fn();
        await asyncUnsetAuthUser()(dispatch);
        api.putAccessToken = () => Promise.resolve('');
        expect(dispatch).toHaveBeenCalledWith(unsetAuthUserActionCreator());
    });
});