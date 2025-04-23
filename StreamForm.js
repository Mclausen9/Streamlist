import React from 'react';
import { FaPlus } from 'react-icons/fa';

const StreamForm = ({ input, setInput, handleSubmit, isEditing }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a movie/show"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">
        <FaPlus /> {isEditing ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default StreamForm;
