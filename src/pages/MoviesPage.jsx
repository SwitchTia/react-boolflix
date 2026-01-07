import MovieCard from "../components/MovieCard";
import "./Pages.css";

function MoviesPage({ moviesList }) {
  const movies = moviesList.filter(item => item.type === "movie");

  return (
    <div className="page">
      <h1>Movies</h1>
      {movies.length === 0 ? (
        <p className="no-results">No movies found. Try searching!</p>
      ) : (
        <div className="cards-container">
          {movies.map((movie) => (
            <MovieCard key={`${movie.type}-${movie.id}`} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MoviesPage;