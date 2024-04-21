import React from 'react';
import PropTypes from 'prop-types';
import CategoriItem from './categoriItem';

export default function CategoriList({ threadList, selectedCategory, handleCategoryClick }) {
    return (
        <div className="category-list">
            {threadList.map((thread) => (
                <CategoriItem key={thread.id} thread={thread} selectedCategory={selectedCategory} handleCategoryClick={handleCategoryClick} />
            ))}
        </div>
    );
}

CategoriList.propTypes = {
    threadList: PropTypes.array,
    selectedCategory: PropTypes.string,
    handleCategoryClick: PropTypes.func,
};
