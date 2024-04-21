import { ActionType } from '../threadDetail/action';

const commentReducer = (comments = [], action) => {
    switch (action.type) {
    case ActionType.ADD_COMMENT:
        return action.payload.comment;
    default:
        return comments;
    }
};

export default commentReducer;