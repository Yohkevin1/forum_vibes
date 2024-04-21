import { ActionType } from './action';

export default function leaderboardsReducer(leaderboards = [], action = {}) {
    switch (action.type) {
    case ActionType.POPULATE_LEADERBOARDS:
        return action.payload.leaderboards;
    default:
        return leaderboards;
    }
}