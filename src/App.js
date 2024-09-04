import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const editTask = (task) => {
    setTasks(tasks.map(t => t.id === task.id ? task : t));
    setCurrentTask(null);
  };

  const deleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter(t => t.id !== id));
    }
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskForm currentTask={currentTask} onSubmit={currentTask ? editTask : addTask} />
      <TaskList
        tasks={tasks}
        onEdit={(task) => setCurrentTask(task)}
        onDelete={deleteTask}
        onToggleComplete={toggleComplete}
      />
    </div>
  );
};

export default App;