import React from 'react';
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';

const StreamItem = ({ item, index, onEdit, onDelete, onComplete }) => {
  return (
    <li className={item.completed ? 'completed' : ''}>
      {item.text}
      <div className="actions">
        <button onClick={() => onEdit(index)}><FaEdit /></button>
        <button onClick={() => onComplete(index)}><FaCheck /></button>
        <button onClick={() => onDelete(index)}><FaTrash /></button>
      </div>
    </li>
  );
};

export default StreamItem;
