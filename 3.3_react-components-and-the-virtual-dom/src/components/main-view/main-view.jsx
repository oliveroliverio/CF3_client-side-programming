import React from 'react'
import { useState } from 'react';
import { BookCard } from '../book-card/book-card';

// books array
const books = [
    {
        id: 1,
        title: "Eloquent JavaScript"
    },
    {
        id: 2,
        title: "Mastering JavaScript Functional Programming"
    },
    {
        id: 3,
        title: "JavaScript: The Good Parts"
    },
    {
        id: 4,
        title: "JavaScript: The Definitive Guide"
    },
    {
        id: 5,
        title: "The Road to React"
    }
]

export const MainView = () => {
    const [booksList, setBooksList] = useState(books)
    return (
        <>
            {booksList.map((book) => (
                <BookCard key={book.id} bookData={book} />
            ))}
            <button>test</button>
        </>
    );
};