import "./Header.css";

import { useState } from "react";
import axios from "axios";



function Header({ setMoviesList }) {

    const [searchQuery, setSearchQuery] = useState("");

    const API_KEY = import.meta.env.VITE_API_KEY;
    const BASE_URL = "https://api.themoviedb.org/3";

    function handleSearch() {
        if (!searchQuery) return;

        axios.get(`${BASE_URL}/search/movie`, {
            params: {
                api_key: API_KEY,
                query: searchQuery,
                language: "it-IT"
            }
        })
            .then((moviesResponse) => {
                const movies = moviesResponse.data.results.map(movie => ({
                    ...movie,
                    type: "movie"
                }));

                return axios.get(`${BASE_URL}/search/tv`, {
                    params: {
                        api_key: API_KEY,
                        query: searchQuery,
                        language: "it-IT"
                    }
                })
                    .then((tvResponse) => {
                        const tvShows = tvResponse.data.results.map(show => ({
                            ...show,
                            type: "tv"
                        }));

                        setMoviesList([...movies, ...tvShows]);
                    });
            })
            .catch((error) => {
                console.error("Error searching:", error);
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