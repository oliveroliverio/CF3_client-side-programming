import React, { useState, useEffect } from 'react';

function BookList() {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // This effect runs once when component mounts
        fetch('https://openlibrary.org/subjects/javascript.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setBooks(data.works.slice(0, 5)); // Get first 5 books
                setIsLoading(false);
            })
            .catch(error => {
                setError('Error fetching books: ' + error.message);
                setIsLoading(false);
            });
    }, []); // Empty dependency array means this runs once on mount

    if (isLoading) return <div>Loading books...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h2>JavaScript Books (Hook Example with API)</h2>
            <ul>
                {books.map(book => (
                    <li key={book.key}>
                        <h3>{book.title}</h3>
                        <p>First published: {book.first_publish_year || 'Unknown'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;
