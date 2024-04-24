import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
    RECEIVE_THREADS: 'RECEIVE_THREADS',
    ADD_THREAD: 'ADD_THREAD',
    TOGGLE_UP_VOTE_THREAD: 'TOGGLE_UP_VOTE_THREAD',
    TOGGLE_DOWN_VOTE_THREAD: 'TOGGLE_DOWN_VOTE_THREAD',
};

function receiveThreadsActionCreator(threads) {
    return {
        type: ActionType.RECEIVE_THREADS,
        payload: {
            threads,
        },
    };
}

function addThreadActionCreator(thread) {
    return {
        type: ActionType.ADD_THREAD,
        payload: {
            thread,
        },
    };
}

function toggleUpVoteThreadActionCreator({ threadId, userId }) {
    return {
        type: ActionType.TOGGLE_UP_VOTE_THREAD,
        payload: {
            threadId,
            userId,
        },
    };
}

function toggleDownVoteThreadActionCreator({ threadId, userId }) {
    return {
        type: ActionType.TOGGLE_DOWN_VOTE_THREAD,
        payload: {
            threadId,
            userId,
        },
    };
}

function asyncAddThread(title, category, body) {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const thread = await api.createThread(title, category, body);
            dispatch(addThreadActionCreator(thread));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
}

function asyncToogleUpVoteThread(threadId) {
    return async (dispatch, getState) => {
        dispatch(showLoading());
        const { authUser, threads } = getState();
        const thread = threads.find((thread) => thread.id === threadId);
        if (thread.downVotesBy.includes(authUser.id)) {
            await dispatch(asyncToogleDownVoteThread(threadId));
        }
        if (thread.upVotesBy.includes(authUser.id)) {
            await api.neutralizeVoteThread(threadId); // Jika sudah, batalkan upvote
        } else {
            await api.upVoteThread(threadId); // Jika belum, lakukan upvote
        }
        dispatch(toggleUpVoteThreadActionCreator({ threadId, userId: authUser.id }));
        dispatch(hideLoading());
    };
}

function asyncToogleDownVoteThread(threadId) {
    return async (dispatch, getState) => {
        dispatch(showLoading());
        const { authUser, threads } = getState();
        const thread = threads.find((thread) => thread.id === threadId);
        if (thread.upVotesBy.includes(authUser.id)) {
            await dispatch(asyncToogleUpVoteThread(threadId));
        }
        if (thread.downVotesBy.includes(authUser.id)) {
            await api.neutralizeVoteThread(threadId); // Jika sudah, batalkan downvote
        } else {
            await api.downVoteThread(threadId); // Jika belum, lakukan downvote
        }

        dispatch(toggleDownVoteThreadActionCreator({ threadId, userId: authUser.id }));
        dispatch(hideLoading());
    };
}
export {
    ActionType,
    receiveThreadsActionCreator,
    addThreadActionCreator,
    toggleUpVoteThreadActionCreator,
    toggleDownVoteThreadActionCreator,
    asyncAddThread,
    asyncToogleUpVoteThread,
    asyncToogleDownVoteThread,
};
