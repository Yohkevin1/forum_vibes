import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
    POPULATE_LEADERBOARDS: 'POPULATE_LEADERBOARDS',
};

function populateLeaderboardsActionCreator(leaderboards) {
    return {
        type: ActionType.POPULATE_LEADERBOARDS,
        payload: {
            leaderboards,
        },
    };
}

function populateLeaderboards() {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const leaderboards = await api.leaderboards();
            dispatch(populateLeaderboardsActionCreator(leaderboards));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
}

export {
    ActionType,
    populateLeaderboardsActionCreator,
    populateLeaderboards,
};