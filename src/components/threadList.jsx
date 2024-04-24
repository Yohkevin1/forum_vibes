import React from 'react';
import PropTypes from 'prop-types';
import ThreadItems from './threadItems';

export default function ThreadList({ threadList, upVote, downVote }) {
    return (
        <div className="content-threads-list">
            {threadList.map((thread) => (
                <ThreadItems key={thread.id} thread={thread} upVote={upVote} downVote={downVote} />
            ))}
        </div>
    );
}

ThreadList.propTypes = {
    threadList: PropTypes.array,
    upVote: PropTypes.func,
    downVote: PropTypes.func,
};
