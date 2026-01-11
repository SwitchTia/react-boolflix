import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import MovieCard from "./components/MovieCard.jsx";
import HomePage from "./pages/HomePage.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout.jsx";



function App() {
  const [moviesList, setMoviesList] = useState([]);



  return (


    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout setMoviesList={setMoviesList} />}>
          <Route path="/" element={<HomePage moviesList={moviesList} />} />
        </Route>
      </Routes>
    </BrowserRouter>

    // <div className="App">

    //   <Header
    //     setMoviesList={setMoviesList}

    //   />

    //   <main className="main-content">
    //     <div className="cards-container">
    //       {moviesList.map((movie) => (

    //         <MovieCard
    //           key={`${movie.type}-${movie.id}`}
    //           movie={movie} />
    //       ))}

    //     </div>
    //   </main>

    // </div>
  )
}

export default App
