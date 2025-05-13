import React, { useState } from 'react';

const StreamList = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const handleAdd = () => {
    if (input.trim()) {
      console.log("Added:", input);
      setList([...list, input]);
      setInput('');
    }
  };

  return (
    <div className="streamlist">
      <h2>My StreamList</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a movie or show"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default StreamList;
