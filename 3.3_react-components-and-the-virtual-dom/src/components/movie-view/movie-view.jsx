import React from 'react';

const MovieView = ({ movie, onBackClick }) => {
  return (
    <div className="movie-view">
      <div className="movie-poster">
        <img src={movie.image} alt={movie.title} />
      </div>
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>Director: {movie.director}</p>
        <p>{movie.description}</p>
        <button onClick={onBackClick}>Back</button>
      </div>
    </div>
  );
};

export default MovieView;
