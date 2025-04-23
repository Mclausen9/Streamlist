import React from 'react';
import StreamItem from './StreamItem';

const StreamList = ({ items, onEdit, onDelete, onComplete }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <StreamItem
          key={index}
          item={item}
          index={index}
          onEdit={onEdit}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </ul>
  );
};

export default StreamList;
