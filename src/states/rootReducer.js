import { loadingBarReducer } from 'react-redux-loading-bar';
import leaderboardsReducer from './leaderboards/reducer';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import usersReducer from './users/reducer';
import threadsReducer from './threads/reducer';
import threadDetailReducer from './threadDetail/reducer';
import commentReducer from './comment/reducer';

export default function rootReducer(state = {}, action = {}) {
    return {
        loadingBar: loadingBarReducer(state.loadingBar, action),
        leaderboards: leaderboardsReducer(state.leaderboards, action),
        authUser: authUserReducer(state.authUser, action),
        isPreload: isPreloadReducer(state.isPreload, action),
        users: usersReducer(state.users, action),
        threads: threadsReducer(state.threads, action),
        threadDetail: threadDetailReducer(state.threadDetail, action),
        comment: commentReducer(state.comment, action),
    };
}