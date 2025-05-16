import React from 'react';

const MovieCard = ({ movieData, onMovieClick }) => {
  return (
    <div 
      className="movie-card"
      onClick={() => onMovieClick(movieData)}
    >
      <div className="movie-poster">
        <img src={movieData.image} alt={movieData.title} />
      </div>
      <div className="movie-info">
        <h3>{movieData.title}</h3>
        <p>Director: {movieData.director}</p>
      </div>
    </div>
  );
};

export default MovieCard;
