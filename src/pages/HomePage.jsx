import { useContext } from "react";
import MovieCard from "../components/MovieCard.jsx";

function HomePage({ moviesList }) {
    return (
        <div >

            {moviesList.length === 0 ? (
                <p >Search for movies and TV shows</p>
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