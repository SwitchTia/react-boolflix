import './MovieCard.css'

function MovieCard({ item }) {
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w342'
  
  // Get title based on type (movie or TV show)
  const title = item.type === 'movie' ? item.title : item.name
  const originalTitle = item.type === 'movie' ? item.original_title : item.original_name
  
  // Get the poster image URL
  const posterUrl = item.poster_path 
    ? `${IMAGE_BASE_URL}${item.poster_path}` 
    : 'https://via.placeholder.com/342x513?text=No+Image'
  
  // Convert language code to flag emoji
  function getFlag(languageCode) {
    const flags = {
      'en': '🇬🇧',
      'it': '🇮🇹',
      'es': '🇪🇸',
      'fr': '🇫🇷',
      'de': '🇩🇪',
      'ja': '🇯🇵',
      'ko': '🇰🇷',
      'zh': '🇨🇳',
      'pt': '🇵🇹',
      'ru': '🇷🇺'
    }
    return flags[languageCode] || languageCode.toUpperCase()
  }
  
  // Convert vote (0-10) to stars (1-5)
  function getStars(vote) {
    const stars = Math.ceil(vote / 2)
    return stars
  }
  
  // Create star rating display
  function renderStars() {
    const starCount = getStars(item.vote_average)
    const stars = []
    
    for (let i = 1; i <= 5; i++) {
      if (i <= starCount) {
        stars.push(<i key={i} className="fas fa-star"></i>)
      } else {
        stars.push(<i key={i} className="far fa-star"></i>)
      }
    }
    
    return stars
  }

  return (
    <div className="movie-card">
      <div className="card-image">
        <img src={posterUrl} alt={title} />
      </div>
      
      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        
        <div className="card-details">
          <p><strong>Original Title:</strong> {originalTitle}</p>
          <p><strong>Language:</strong> {getFlag(item.original_language)}</p>
          <p><strong>Rating:</strong> {item.vote_average.toFixed(1)}</p>
          <div className="stars">
            {renderStars()}
          </div>
          <p className="overview">{item.overview || 'No description available'}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard