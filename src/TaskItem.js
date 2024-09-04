import React from 'react';

const TaskItem = ({ task, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', backgroundColor: task.completed ? '#d3ffd3' : '#fff' }}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <button onClick={() => onToggleComplete(task.id)}>
        {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
      </button>
    </div>
  );
};

export default TaskItem;