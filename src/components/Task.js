import React from "react";

function Task({task, onTaskDelete}) {
  if (!task) return null;
  const {text, category, id} = task;

  const handleDelete = () => {
    onTaskDelete(id);
  };
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
