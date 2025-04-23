import React, { useState } from 'react';
import { FaFilm, FaHeart, FaSmile } from 'react-icons/fa';

const Movies = () => {
  const [eventMessage, setEventMessage] = useState('');

  const handleClick = () => {
    setEventMessage('🎬 You clicked the movies loved button!');
  };

  const handleMouseEnter = () => {
    setEventMessage('👀 Hovering over the movie list area...');
  };

  const handleMouseLeave = () => {
    setEventMessage('');
  };

  return (
    <div className="page">
      <h2><FaFilm style={{ color: '#2d89ef', marginRight: '10px' }} />Movies Page</h2>
      <p>This page will be developed in Week 4.</p>

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundColor: '#f9f9f9',
          border: '1px solid #ddd',
          padding: '1rem',
          borderRadius: '8px',
          marginTop: '1rem',
        }}
      >
        <p><FaSmile /> Hover over this area to see some magic ✨</p>
        <button
          onClick={handleClick}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#2d89ef',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginTop: '0.5rem'
          }}
        >
          <FaHeart /> Love Movies
        </button>
      </div>

      {eventMessage && (
        <div style={{ marginTop: '1rem', fontStyle: 'italic', color: '#333' }}>
          {eventMessage}
        </div>
      )}
    </div>
  );
};

export default Movies;
