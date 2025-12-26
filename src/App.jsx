import { useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import './App.css'

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const API_KEY = "YOUR_API_KEY_HERE";
  const BASE_URL = "https://api.themoviedb.org/3";


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
