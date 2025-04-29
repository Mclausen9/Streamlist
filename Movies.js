import React, { useState, useEffect } from 'react';

const API_KEY = 'bd93071fe10b07afcc415306a97701d4'; // Replace with your actual TMDB API key

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      );
      const data = await response.json();
      setMovies(data.results);
      localStorage.setItem('movieResults', JSON.stringify(data.results));
    } catch (error) {
      console.error('Failed to fetch movies:', error);
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
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchMovies}>Search</button>

      <div className="movie-results">
        {movies.map((movie) => (
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

