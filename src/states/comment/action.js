import api from '../../utils/api';

export const addComment = (comment) => ({
    type: 'ADD_COMMENT',
    payload: comment,
});

export const asyncAddComment = ({ id, content }) => async (dispatch) => {
    try {
        const comment = await api.createComment({ id, content });
        dispatch(addComment(comment));
    } catch (error) {
        alert(error.message);
    }
};