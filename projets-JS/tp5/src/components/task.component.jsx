import React from 'react';
import PriorityScale from './priorityScale.component.jsx';
import DoneButton from './doneButton.component.jsx';
import '../assets/style/task.css';

/**
 * task is a component to show one task in the list
 * it shows the description the duration and the priority scale
 * the user can change the priority or click to mark the task as done
 * when marked as done it moves the task from todo list to done list
 * 
 * @param {object} task - the task object with id description duration priority and done
 * @param {function} setTasksToDo - the function to update the todo list
 * @param {function} setTasksDone - the function to update the done list
 */
const Task = ({ task, setTasksToDo, setTasksDone }) => {
  const { id, description, duration, priority, done } = task;

  const priorityChange = newPriority => {
    task.priority = newPriority;
    setTasksToDo(prevTasks => [...prevTasks]);
  };

  const markIsDone = () => {
    task.done = true;
    setTasksToDo(prevTasks => prevTasks.filter(t => t.id !== id));
    setTasksDone(prevTasks => [...prevTasks, task]);
  };

  return (
    <div className={`task ${done ? 'done' : ''}`}>
      <div className="info">
        <p>{description}</p>
        <p> durée: {duration}</p>
        </div>
      <PriorityScale priority={priority} setPriority={priorityChange} />
      {!done && <DoneButton onClick={markIsDone} />}
    </div>
  );
};

export default Task;
