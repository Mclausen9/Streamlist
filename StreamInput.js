import React, { useState } from 'react';

const StreamInput = ({ onAdd }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    onAdd(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a movie or show"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit"><i className="fas fa-plus"></i> Add</button>
    </form>
  );
};

export default StreamInput;
