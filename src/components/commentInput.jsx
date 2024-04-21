import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import useInput from '../hooks/useInput';
import {asyncAddComment} from '../states/comment/action';

export default function CommentInput({threadId}) {
    const [content, handleContent] = useInput('');
    const dispatch = useDispatch();

    const onCommentSubmit = () => {
        dispatch(asyncAddComment({ id: threadId, content }));
    };
    return (
        <div className="thread-comment__input">
            <h3>Beri komentar</h3>
            <form className="comment-input">
                <textarea className="comment-input__field" value={content} onChange={handleContent}></textarea>
                <button onClick={onCommentSubmit}>Kirim</button>
            </form>
        </div>
    );
}

CommentInput.propTypes = {
    threadId: PropTypes.string.isRequired,
};