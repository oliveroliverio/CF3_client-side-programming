const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <img src={movie.poster} alt={movie.title} />
      <p>Genre: {movie.genre}</p>
      <p>Director: {movie.director}</p>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

export default MovieView;
