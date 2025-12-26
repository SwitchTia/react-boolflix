import { useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import MovieCard from './components/MovieCard'
import './App.css'



function App() {
  // Use state for input
  const [searchQuery, setSearchQuery] = useState('')
  
  // Use state for storing movies and TV shows
  const [results, setResults] = useState([])
  
  // Get API key from environment variables
  const API_KEY = import.meta.env.VITE_API_KEY
  const BASE_URL = 'https://api.themoviedb.org/3'

  // Search for movies and TV shows
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
        setResults([...movies, ...tvShows])
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
          {results.map((item) => (

            <MovieCard 
              key={`${item.type}-${item.id}`}
              item={item}
            />

          ))}
        </div>
      </main>
    </div>
  )
}

export default App