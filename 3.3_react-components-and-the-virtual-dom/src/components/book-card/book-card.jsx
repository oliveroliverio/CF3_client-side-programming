import React from 'react';

export const BookCard = ({ bookData }) => {
    return (
        <div className="book-card">
            <h3>{bookData.title}</h3>
            <p>{bookData.author}</p>
            <img src={bookData.image} alt={bookData.title} />
        </div>
    );
};