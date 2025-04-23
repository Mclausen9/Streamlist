import React, { useState } from 'react';
import { FaTv, FaShoppingCart } from 'react-icons/fa';
import StreamForm from './StreamForm';
import StreamList from './StreamList';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [streamList, setStreamList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newItem = { text: input.trim(), completed: false };

    if (editIndex !== null) {
      const updated = [...streamList];
      updated[editIndex] = { ...updated[editIndex], text: input };
      setStreamList(updated);
      setEditIndex(null);
    } else {
      setStreamList([...streamList, newItem]);
    }

    setInput('');
  };

  const handleEdit = (index) => {
    setInput(streamList[index].text);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setStreamList(streamList.filter((_, i) => i !== index));
  };

  const handleComplete = (index) => {
    const updated = [...streamList];
    updated[index].completed = !updated[index].completed;
    setStreamList(updated);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <h1><FaTv /> StreamList</h1>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#movies">Movies</a>
          <a href="#cart"><FaShoppingCart /> Cart</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <section className="input-section" id="home">
        <h2>{editIndex !== null ? 'Edit Item' : 'Add to StreamList'}</h2>
        <StreamForm
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
          isEditing={editIndex !== null}
        />
      </section>

      <section className="list-section">
        <h2>My StreamList</h2>
        <StreamList
          items={streamList}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onComplete={handleComplete}
        />
      </section>

      <section id="about">
        <h2>About</h2>
        <p>Track your favorite shows and movies effortlessly with StreamList!</p>
      </section>
    </div>
  );
};

export default App;
