import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setTasks([
      ...tasks,
      { id: Date.now(), text: input, completed: false }
    ]);
    setInput('');
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const startEditing = (id, currentText) => {
    setEditId(id);
    setEditText(currentText);
  };

  const submitEdit = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, text: editText } : task
      )
    );
    setEditId(null);
    setEditText('');
  };

  return (
    <div className="app">
      <h1>StreamList Task Manager</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            {editId === task.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => submitEdit(task.id)}>Save</button>
              </>
            ) : (
              <>
                <span>{task.text}</span>
                <div className="actions">
                  <button onClick={() => startEditing(task.id, task.text)}>✏️</button>
                  <button onClick={() => handleToggleComplete(task.id)}>
                    {task.completed ? '↩️' : '✅'}
                  </button>
                  <button onClick={() => handleDelete(task.id)}>🗑️</button>
                </div>
              </>
            )}+
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
