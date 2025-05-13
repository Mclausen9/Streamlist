import React, { useState, useEffect } from 'react';

const API_KEY = 'bd93071fe10b07afcc415306a97701d4'; // Replace with your actual TMDB API key

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false); // Added loading state
  const [error, setError] = useState(null); // Added error state

  const searchMovies = async () => {
    setLoading(true); // Set loading to true before fetch
    setError(null); // Clear previous errors
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      );
      if (!response.ok) { // Check for HTTP errors
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setMovies(data.results);
      localStorage.setItem('movieResults', JSON.stringify(data.results));
    } catch (error) {
      console.error('Failed to fetch movies:', error);
      setError('Failed to fetch movies. Please try again.'); // Set user-friendly error message
      setMovies([]); // Clear movies on error
    } finally {
      setLoading(false); // Set loading to false after fetch (success or failure)
    }
  };

  useEffect(() => {
    const savedMovies = localStorage.getItem('movieResults');
    if (savedMovies) {
      setMovies(JSON.parse(savedMovies));
    }
  }, []);

  return (
    <div className="page">
      <h2>Search Movies</h2>
      <div> {/* Added a div for input and button */}
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchMovies} disabled={loading}> {/* Disable button while loading */}
          {loading ? 'Searching...' : 'Search'} {/* Button text changes based on loading state */}
        </button>
      </div>

      {error && <div style={{ color: 'red' }}>{error}</div>} {/* Display error message */}

      <div className="movie-results">
        {loading && <div>Loading...</div>} {/* Display loading indicator */}
        {!loading && movies.length === 0 && query && !error && (
          <div>No movies found for "{query}".</div> // Display no results message
        )}
        {!loading && movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h3>{movie.title}</h3>
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
            )}
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
