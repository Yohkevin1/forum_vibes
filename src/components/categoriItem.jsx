import React from 'react';
import PropTypes from 'prop-types';

export default function CategoriItem({ thread, selectedCategory, handleCategoryClick }) {
    const handleClick = () => {
        handleCategoryClick(thread.category);
    };

    return (
        <button type="button" className={`category-item ${selectedCategory === thread.category ? 'selected' : ''}`} onClick={handleClick}> {thread.category} </button>
    );
}

CategoriItem.propTypes = {
    thread: PropTypes.object,
    selectedCategory: PropTypes.string,
    handleCategoryClick: PropTypes.func,
};
