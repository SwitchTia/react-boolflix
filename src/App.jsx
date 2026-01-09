import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import MovieCard from "./components/MovieCard";



function App() {
  const [moviesList, setMoviesList] = useState([]);



  return (
    <div className="App">

      <Header
        setMoviesList={setMoviesList}
       
      />

      <main className="main-content">
        <div className="cards-container">
          {moviesList.map((movie) => (

            <MovieCard
              key={`${movie.type}-${movie.id}`}
              movie={movie} />
          ))}

        </div>
      </main>

    </div>
  )
}

export default App
