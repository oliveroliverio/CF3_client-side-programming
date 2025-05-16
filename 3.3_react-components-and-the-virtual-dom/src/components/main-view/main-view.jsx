import React, { useState } from 'react';
import MovieCard from '../movie-card/movie-card';
import MovieView from '../movie-view/movie-view';

const MainView = () => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "Inception",
            image: "https://www.movieposters.com/cdn/shop/products/20664117398ad7301d9a9af6d2e5aa5c_480x.progressive.jpg",
            director: "Christopher Nolan",
            description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
        },
        {
            id: 2,
            title: "The Matrix",
            image: "https://www.movieposters.com/cdn/shop/products/matrix.24x36_480x.progressive.jpg",
            director: "The Wachowskis",
            description: "A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to break free."
        },
        {
            id: 3,
            title: "Interstellar",
            image: "https://www.movieposters.com/cdn/shop/products/interstellar2_480x.progressive.jpg",
            director: "Christopher Nolan",
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
        },
        {
            id: 4,
            title: "The Dark Knight",
            image: "https://www.movieposters.com/cdn/shop/products/darkknight.building.mp_480x.progressive.jpg",
            director: "Christopher Nolan",
            description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
        },
        {
            id: 5,
            title: "Pulp Fiction",
            image: "https://www.movieposters.com/cdn/shop/products/pulpfiction.2436_480x.progressive.jpg",
            director: "Quentin Tarantino",
            description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
        }
    ]);

    if (selectedMovie) {
        return <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />;
    }

    return (
        <div className="main-view">
            <h1>myFlix Movies</h1>
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movieData={movie}
                        onMovieClick={setSelectedMovie}
                    />
                ))}
            </div>
        </div>
    );
};

export default MainView;