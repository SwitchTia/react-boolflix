import { useContext } from "react";
import MovieCard from "../components/MovieCard";

function HomePage({ moviesList }) {
    return (
        <div className="page">

            <h1>Search Results</h1>

            {moviesList.length === 0 ? (
                <p className="no-results">Search for movies and TV shows above</p>
            ) : (
                <div className="cards-container">
                    {moviesList.map((movie) => (
                        <MovieCard key={`${movie.type}-${movie.id}`} movie={movie} />
                    ))}
                </div>
            )}
        </div>

    )
}

export default HomePage;