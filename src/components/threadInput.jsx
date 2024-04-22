import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

export default function ThreadInput({ onAddThread }) {
    const [title, handleTitleChange] = useInput('');
    const [body, handleBodyChange] = useInput('');
    const [category, handleCategoryChange] = useInput('');

    return (
        <div className="container_created_thread">
            <h2>Buat Diskusi Baru</h2>
            <form>
                <input style={{backgroundColor: 'var(--warna_main)'}} className="input" type="judul" placeholder="Masukkan judul" value={title} onChange={handleTitleChange} />
                <input style={{backgroundColor: 'var(--warna_main)'}} className="input" type="category" placeholder="Masukkan kategori" value={category} onChange={handleCategoryChange} />
                <textarea style={{backgroundColor: 'var(--warna_main)', height: '200px'}} className="input" type="body" placeholder="Masukkan deskripsi" value={body} onChange={handleBodyChange}></textarea>
                <button className="button_login" onClick={() => onAddThread({ title, body, category })}>Buat</button>
            </form>
        </div>
    );
}

ThreadInput.propTypes = {
    onAddThread: PropTypes.func.isRequired,
};