import "./MovieCard.css"

function MovieCard({ movie }) {
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w342";

    // The MovieDB API returns different field names for movies vs TV shows:

    // Movie    movie.title     movie.original_title
    // TV Show  movie.name      movie.original_name

    const movieTitle = movie.type === "movie" ? movie.title : movie.name;
    const tvShowTitle = movie.type === "movie" ? movie.original_title : movie.original_name;

    //Rendering movie/Tv show poster
    const moviePosterUrl = movie.poster_path
        ? `${IMAGE_BASE_URL}${movie.poster_path}`
        : "https://via.placeholder.com/342x513?text=No+Image";

    return (
        <div className="movie-card">
            <div className="card-img">

                <img src={moviePosterUrl} alt={movieTitle} />

            </div>

        </div>
    )

}

export default MovieCard;