import React from 'react';
import { BookView } from '../book-view/book-view';

export const BookCard = ({ bookData }) => {
    return (
        <div className="book-card">
            <BookView book={bookData} />
        </div>
    );
};