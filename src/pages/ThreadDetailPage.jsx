import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BiSolidShare } from 'react-icons/bi';
import {useParams} from 'react-router-dom';
import {asyncReceiveThreadDetail} from '../states/threadDetail/action';
import { postedAt } from '../utils';
import CommentInput from '../components/commentInput';
import {asyncAddComment} from '../states/comment/action';

export default function ThreadDetailPage() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const { threadDetail } = useSelector((states) => states);

    useEffect(() => {
        dispatch(asyncReceiveThreadDetail(id));
    }, [dispatch, id]);

    const onCommentSubmit = ({content}) => {
        dispatch(asyncAddComment({ id, content }));
        dispatch(asyncReceiveThreadDetail(id));
    };

    if (!threadDetail) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container_detail_thread">
            <div className="thread-item" style={{width: '100%'}}>
                <header className="thread-item__header">
                    <span className="thread-item__category">
                        {threadDetail.category}
                    </span>
                    <h4 className="thread-item__title">
                        {threadDetail.title}
                    </h4>
                </header>
                <div className="thread-item__body" dangerouslySetInnerHTML={{ __html: threadDetail.body }} />
                <footer className="thread-item__footer">
                    <p className="thread-item__total-comments">
                        <BiSolidShare />
                        {Array.isArray(threadDetail) ? threadDetail.length : 0}
                    </p>
                    <p>{postedAt(threadDetail.createdAt)}</p>
                    <p className="thread-item__owner">
                        <img src={threadDetail.owner.avatar} alt={threadDetail.owner.name} />
                        Dibuat oleh
                        <strong>{threadDetail.owner.name}</strong>
                    </p>
                </footer>
            </div>
            <div className="thread-comment">
                <div className="thread-comment__input">
                    <h3>Beri komentar</h3>
                    <CommentInput submitComment={onCommentSubmit} />
                </div>
                <div className="thread-comment__list">
                    <h3>Komentar ({threadDetail.comments ? threadDetail.comments.length : 0})</h3>
                    <div className="comments-list">
                        {threadDetail.comments && threadDetail.comments.map((comment) => (
                            <div className="comment-item" key={comment.id}>
                                <header className="comment-item__header">
                                    <div className="comment-item__owner-info">
                                        <img src={comment.owner.avatar} alt={comment.owner.name} />
                                        <p>{comment.owner.name}</p>
                                    </div>
                                    <p className="posted-at">{postedAt(comment.createdAt)}</p>
                                </header>
                                <div dangerouslySetInnerHTML={{ __html: comment.content }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}