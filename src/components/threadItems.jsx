import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BiLike, BiDislike, BiSolidShare } from 'react-icons/bi';
import {AiFillLike, AiFillDislike} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { postedAt } from '../utils';

export default function ThreadItems({ thread, upVote, downVote}) {
    const navigate = useNavigate();
    const [isUpvoted, setIsUpvoted] = useState(false);
    const [isDownvoted, setIsDownvoted] = useState(false);

    useEffect(() => {
        if (thread.upVotesBy.includes(thread.authUser)) {
            setIsUpvoted(true);
            setIsDownvoted(false);
        }
        if (thread.downVotesBy.includes(thread.authUser)) {
            setIsDownvoted(true);
            setIsUpvoted(false);
        }
    }, [thread]);

    const onClickThread = () => {
        navigate(`/thread/${thread.id}`);
    };

    const onThreadPress = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            navigate(`/thread/${thread.id}`);
        }
    };

    const threadBodyPreview = thread.body.split(' ').slice(0, 31).join(' ');

    const handleUpVote = () => {
        upVote(thread.id);
        setIsUpvoted(!isUpvoted);
    };

    const handleDownVote = () => {
        downVote(thread.id);
        setIsDownvoted(!isDownvoted);
    };

    return (
        <div className="thread-item">
            <header className="thread-item__header">
                <span className="thread-item__category">#{thread.category}</span>
                <h4 className="thread-item__title" onClick={onClickThread} onKeyDown={onThreadPress}>
                    {thread.title}
                </h4>
            </header>
            <div className="thread-item__body" dangerouslySetInnerHTML={{ __html: threadBodyPreview }} />
            <footer className="thread-item__footer">
                <button type="button" className={`thread-upvote__button ${isUpvoted ? 'bold' : ''}`} onClick={handleUpVote}>
                    {isUpvoted ? <AiFillLike style={{ height: '20px', width: '20px' }} /> : <BiLike style={{ height: '20px', width: '20px' }} />}
                    <span className="thread-upvote__label">{thread.upVotesBy.length}</span>
                </button>
                <button type="button" className={`thread-downvote__button ${isDownvoted ? 'bold' : ''}`} onClick={handleDownVote}>
                    {isDownvoted ? <AiFillDislike style={{ height: '20px', width: '20px' }} /> : <BiDislike style={{ height: '20px', width: '20px' }} />}
                    <span className="thread-downvote__label">{thread.downVotesBy.length}</span>
                </button>
                <p className="thread-item__total-comments"><BiSolidShare />{thread.totalComments}</p>
                <p>{postedAt(thread.createdAt)}</p>
                <p className="thread-item__owner">Dibuat oleh <strong>{thread.author.name}</strong></p>
            </footer>
        </div>
    );
}

ThreadItems.propTypes = {
    thread: PropTypes.object,
    upVote: PropTypes.func,
    downVote: PropTypes.func,
};
