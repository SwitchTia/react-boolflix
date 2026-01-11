import "./MovieCard.css";
import StarEmpty from "../assets/StarEmpty.jsx";
import StarFull from "../assets/StarFull.jsx";


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

    //Rendering the rating stars
    function convertVoteToStars (vote){
        const stars = Math.ceil(vote/2);
        return stars;
    }
    function renderStars(){
        const starCount = convertVoteToStars(movie.vote_average);
        const stars = [];

        for (let i = 1; i <= 5; i++){
            if(i <= starCount){
                stars.push(<StarFull key={i} />);
            }
            else{
                stars.push(<StarEmpty key={i} />);
            }
        }
        return stars;

    }

    return (

        <div className="movie-card">
            <div className="card-img">

                <img src={moviePosterUrl} alt={movieTitle} />

            </div>

            <div className="card-info">

                <h3 className="card-title"> {movieTitle}</h3>
                
                <div>
                    {renderStars()}
                </div>

                <div className="card-details">
                    <p>Votes: {movie.vote_count}</p>
                    <p>Ratings: {movie.vote_average}</p>
                    <p className="overview"> {movie.overview}</p>

                </div>

            </div>
        </div>


    )

}

export default MovieCard;