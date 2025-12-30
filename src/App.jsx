
import { useState } from 'react'
import './App.css'
import Header from './components/Header';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  const API_KEY = import.meta.env.VITE_API_KEY
  const BASE_URL = 'https://api.themoviedb.org/3'
  

  return (
    <div >
      <Header
        searchQuery = {searchQuery}
        setSearchQuery = {setSearchQuery}
        />

      <main>
        <div>
          {/* movies cards */}
        </div>
      </main>
      
    </div>
  )
}

export default App
