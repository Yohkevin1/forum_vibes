import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

export default function CommentInput({submitComment}) {
    const [content, handleContent] = useInput('');

    return (
        <form className="comment-input">
            <textarea className="comment-input__field" placeholder="Tulis komentar..." value={content} onChange={handleContent}></textarea>
            <button onClick={() => submitComment({content})}>Kirim</button>
        </form>
    );
}

CommentInput.propTypes = {
    submitComment: PropTypes.func.isRequired,
};