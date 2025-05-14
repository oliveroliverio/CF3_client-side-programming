import React from 'react'
import { MyComponent } from '../embedding-expressions/my-component';
import { useState } from 'react';

// books array
const books = [
    "Eloquent JavaScript",
    "Mastering JavaScript Functional Programming",
    "JavaScript: The Good Parts",
    "JavaScript: The Definitive Guide",
    "The Road to React"
]

export const MainView = () => {
    const [booksList, setBooksList] = useState(books)
    return (
        <>
            {booksList.map((book, index) => (
                <div key={index}>{book}</div>
            ))}
            <button>test</button>
            <MyComponent />
        </>
    );
};