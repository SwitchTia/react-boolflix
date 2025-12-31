import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import MovieCard from "./components/MovieCard";
import axios from "axios";


function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const [searchedMovieList, setSearchedMovieList] = useState([]);


  const API_KEY = import.meta.env.VITE_API_KEY;//importing the key from enviroment variable
  const BASE_URL = 'https://api.themoviedb.org/3';



  function handleSearch() {
    if (!searchQuery) return

    // Search for movies
    axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: searchQuery,
        language: 'it-IT'
      }
    })

      .then((moviesResponse) => {
        // Add type to movies
        const movies = moviesResponse.data.results.map(movie => ({
          ...movie,
          type: 'movie'
        }))

        // Search for TV shows
        return axios.get(`${BASE_URL}/search/tv`, {
          params: {
            api_key: API_KEY,
            query: searchQuery,
            language: 'it-IT'
          }
        })

          .then((tvResponse) => {
            // Add type to TV shows
            const tvShows = tvResponse.data.results.map(show => ({
              ...show,
              type: 'tv'
            }))

            // Combine both results
            setSearchedMovieList([...movies, ...tvShows])
          })
      })
      .catch((error) => {
        console.error('Error searching:', error)
      })
  }




  return (
    <div className="App">

      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />

      <main className="main-content">
        <div className="cards-container">
          {searchedMovieList.map((movie) => (

            <MovieCard
              key={movie.id}
              movie={movie} />
          ))}

        </div>
      </main>

    </div>
  )
}

export default App
