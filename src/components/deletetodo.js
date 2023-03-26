import React, { useState } from 'react';

function DeleteTodo({ todo, onDelete }) {
  const [isConfirming, setIsConfirming] = useState(false);

  const handleDelete = () => {
    onDelete(todo.id);
  }

  const handleConfirm = () => {
    setIsConfirming(true);
  }

  const handleCancel = () => {
    setIsConfirming(false);
  }

  const confirmContent = (
    <div>
      <p>Are you sure you want to delete this Todo?</p>
      <button onClick={handleDelete}>Yes</button>
      <button onClick={handleCancel}>No</button>
    </div>
  );

  const content = (
    <div>
      <p>{todo.title}</p>
      <button onClick={handleConfirm}>Delete</button>
    </div>
  );

  return (
    <div>
      {isConfirming ? confirmContent : content}
    </div>
  );
}

export default DeleteTodo;
