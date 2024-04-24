import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncAddThread } from '../states/threads/action';
import ThreadInput from '../components/threadInput';

export default function ThreadAddPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onAddThread = ({ title, body, category }) => {
        if (title.trim() === '' || body.trim() === '' || category.trim() === '') {
            alert('Semua kolom harus diisi');
            return;
        }
        dispatch(asyncAddThread({ title, body, category }));
        navigate('/');
    };

    return (
        <div className="container_created_thread">
            <h2>Buat Diskusi Baru</h2>
            <ThreadInput onAddThread={onAddThread} />
        </div>
    );
}