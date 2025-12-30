import { useState } from "react";
import "./App.jsx";
import Header from "./components/Header.jsx";
import MovieCard from "./components/MovieCard";
import axios from "axios";


function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedMovieList, setSearchedMovieList] = useState([]);


  const API_KEY = import.meta.env.VITE_API_KEY;//importing the key from enviroment variable
  const BASE_URL = 'https://api.themoviedb.org/3';
  


  function handleSearch () {
    if (!searchQuery) return


    axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: searchQuery,
        language: "it-IT"
      }
    })
    .then((moviesResponse) => {
      const movies = moviesResponse.data.results; 

      const moviesWithType = [];
      for (let i = 0; i< movies.length; i++){
        moviesWithType.push({
          ...movies[i],
          type: "movie"
        })
      }

      axios.get(`${BASE_URL}/search/tv`, {
        params: {
          api_key: API_KEY,
          query: searchQuery,
          language: "it-IT"
        }
      })
      .then((response) => {
        const tvShows = response.data.results;

        const tvShowsWithType = [];
        for (let i = 0; i < tvShows.length; i++){
          tvShowsWithType.push({
            ...tvShows[i],
            type: "tv"
          })
        }
      })

      const allResults = moviesWithType.concat(tvShowsWithType);

      setSearchedMovieList(allResults);

    })
    .catch((error) => {
      console.error("Errpr searching: ", error)
    })
  }




  return (
    <div >
      <Header
        searchQuery = {searchQuery}
        setSearchQuery = {setSearchQuery}
        handleSearch = {handleSearch}
        />

      <main className="main-content">
        <div className="cards-container">
          {searchedMovieList.map((movie) => (

            <MovieCard
              key={movie.id}
              movie={movie}/>
          ))}
          
        </div>
      </main>
      
    </div>
  )
}

export default App
