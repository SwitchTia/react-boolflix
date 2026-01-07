import "./Header.css";
import { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import { Link } from "react-router-dom";


function Header() {

    const [searchQuery, setSearchQuery] = useState("");

    const API_KEY = import.meta.env.VITE_API_KEY;
    const BASE_URL = 'https://api.themoviedb.org/3';

    function handleSearch() {
        if (!searchQuery) return;

        axios.get(`${BASE_URL}/search/movie`, {
            params: {
                api_key: API_KEY,
                query: searchQuery,
                language: 'it-IT'
            }
        })
            .then((moviesResponse) => {
                const movies = moviesResponse.data.results.map(movie => ({
                    ...movie,
                    type: 'movie'
                }));

                return axios.get(`${BASE_URL}/search/tv`, {
                    params: {
                        api_key: API_KEY,
                        query: searchQuery,
                        language: 'it-IT'
                    }
                })
                    .then((tvResponse) => {
                        const tvShows = tvResponse.data.results.map(show => ({
                            ...show,
                            type: 'tv'
                        }));

                        setMoviesList([...movies, ...tvShows]);
                    });
            })
            .catch((error) => {
                console.error('Error searching:', error);
            });
    }



    function handleKeyPress(event) {
        if (event.key === "Enter") {
            handleSearch();
        }
    }

    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">BOOLFLIX</div>

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                    <Link to="/shows">TV-Shows</Link>
                    <Link to="/my-list">My List</Link>
                </nav>

                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Searching for something?"
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                        onClick={handleKeyPress}
                        onKeyDown={handleKeyPress}
                    />

                    <button onClick={handleSearch}>Search</button>
                </div>

            </div>
        </header>
    )
}

export default Header;