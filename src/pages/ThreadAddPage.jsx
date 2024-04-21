import React from 'react';
import { useDispatch } from 'react-redux';
import { asyncAddThread } from '../states/threads/action';
import ThreadInput from '../components/threadInput';

export default function ThreadAddPage() {
    const dispatch = useDispatch();

    const onAddThread = ({ title, body, category }) => {
        dispatch(asyncAddThread({ title, body, category }));
    };

    return (
        <div className="background" style={{backgroundColor: 'var(--warna_main)', minHeight: '85vh'}}>
            <ThreadInput onAddThread={onAddThread} />
        </div>
    );
}