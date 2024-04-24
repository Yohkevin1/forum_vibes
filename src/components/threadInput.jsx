import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

export default function ThreadInput({ onAddThread }) {
    const [title, handleTitleChange] = useInput('');
    const [body, handleBodyChange] = useInput('');
    const [category, handleCategoryChange] = useInput('');

    return (
        <form>
            <input className="input" type="judul" placeholder="Masukkan judul" value={title} onChange={handleTitleChange} />
            <input className="input" type="category" placeholder="Masukkan kategori" value={category} onChange={handleCategoryChange} />
            <textarea className="input" type="body" placeholder="Masukkan deskripsi" value={body} onChange={handleBodyChange}></textarea>
            <button onClick={() => onAddThread({ title, body, category })}>Buat</button>
        </form>
    );
}

ThreadInput.propTypes = {
    onAddThread: PropTypes.func.isRequired,
};