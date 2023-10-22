import React from "react";

function Task({ text, category, handleDelete }) {
  function handleDeleteButton(event) {
    handleDelete(event);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button id={text} className="delete" onClick={handleDeleteButton}>
        X
      </button>
    </div>
  );
}

export default Task;
