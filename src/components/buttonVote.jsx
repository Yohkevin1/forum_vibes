import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BiLike, BiDislike } from 'react-icons/bi';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';

export default function ButtonVote({ thread, authUser, upVote, downVote }) {
    const [isUpvoted, setIsUpvoted] = useState(false);
    const [isDownvoted, setIsDownvoted] = useState(false);

    useEffect(() => {
        if (thread && thread.upVotesBy && thread.downVotesBy) {
            if (thread.upVotesBy.includes(authUser.id)) {
                setIsUpvoted(true);
                setIsDownvoted(false);
            }
            if (thread.downVotesBy.includes(authUser.id)) {
                setIsDownvoted(true);
                setIsUpvoted(false);
            }
        }
    }, [thread, authUser]);

    const handleUpVote = () => {
        upVote(thread.id);
        setIsUpvoted(!isUpvoted);
    };

    const handleDownVote = () => {
        downVote(thread.id);
        setIsDownvoted(!isDownvoted);
    };

    return (
        <>
            <button type="button" className={`thread-upvote__button ${isUpvoted ? 'bold' : ''}`} onClick={handleUpVote}>
                {isUpvoted ? <AiFillLike style={{ height: '20px', width: '20px' }} /> : <BiLike style={{ height: '20px', width: '20px' }} />}
                <span className="thread-upvote__label">{thread.upVotesBy ? thread.upVotesBy.length : 0}</span>
            </button>
            <button type="button" className={`thread-downvote__button ${isDownvoted ? 'bold' : ''}`} onClick={handleDownVote}>
                {isDownvoted ? <AiFillDislike style={{ height: '20px', width: '20px' }} /> : <BiDislike style={{ height: '20px', width: '20px' }} />}
                <span className="thread-downvote__label">{thread.downVotesBy ? thread.downVotesBy.length : 0}</span>
            </button>
        </>
    );
}

ButtonVote.propTypes = {
    thread: PropTypes.object.isRequired,
    upVote: PropTypes.func.isRequired,
    downVote: PropTypes.func.isRequired,
    authUser: PropTypes.object.isRequired,
};
