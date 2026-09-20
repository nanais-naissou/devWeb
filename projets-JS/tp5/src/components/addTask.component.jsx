import React, { useState } from 'react';
import '../assets/style/addtask.css';

/**
 * addtask is a component to create a new task
 * user writes a description and a duration then clicks add
 * the new task is added to the todo list with default priority and not done
 * after adding the fields are reset to empty
 * 
 * @param {function} setTasksToDo - function to update the todo list with the new task
 */


const AddTask = ({ setTasksToDo }) => {
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDuration, setTaskDuration] = useState(0);

  const addTask = () => {
    const newTask = {
    id: `T${Date.now()}`,
    description: taskDescription,
    duration: taskDuration,
    priority: 1,
    done: false,
    };
    setTasksToDo(prevTasks => [...prevTasks, newTask]);
    setTaskDescription('');
    setTaskDuration(0);
  };

  return (
  <div className="addTask">
    <input type="text" value={taskDescription} onChange={e => setTaskDescription(e.target.value)} placeholder="description"/>
    <input type="number" value={taskDuration} onChange={e => setTaskDuration(Number(e.target.value))} placeholder="duration"/>
    <button onClick={addTask}> add </button>
  </div>
  );

};

export default AddTask;
