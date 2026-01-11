import MovieCard from "../components/MovieCard.jsx";

function ShowsPage({ moviesList }) {
    const shows = moviesList.filter(item => item.type === "tv");

    return (
        <div >
            <h1>TV Shows</h1>
            
            {shows.length === 0 ? (
                <p className="no-results">No TV shows found. Try searching!</p>

            ) : (

                <div className="cards-container">
                    {shows.map((show) => (
                        <MovieCard key={`${show.type}-${show.id}`} movie={show} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default ShowsPage;