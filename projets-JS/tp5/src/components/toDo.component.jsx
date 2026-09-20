import React, { useState } from 'react';
import Task from './task.component.jsx';
import '../assets/style/tasklist.css';

/**
 * todo shows all tasks that are not done yet
 * user can type text to filter the tasks by description
 * tasks are sorted by priority from high to low
 * it also shows how many tasks are left and their total duration
 * each task is shown using the task component
 * 
 * @param {array} tasks - the list of tasks to do
 * @param {function} setTasksToDo - function to update the todo list
 * @param {function} setTasksDone - function to update the done list
 */

const Todo = ({ tasks, setTasksToDo, setTasksDone }) => {
  const [searchText, setSearchText] = useState(''); 

  const filteredTasks = tasks.filter(task =>
    task.description.toLowerCase().includes(searchText.toLowerCase())
  );
  const sortedTasks = [...filteredTasks].sort((a, b) => b.priority - a.priority);
  const search = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="tasklist">
      <h3>Tâches en cours</h3>
      <div className="filter"><input type="text" placeholder="filtrer" value={searchText} onChange={search}/></div>
      <div className="info">
        Il y'a {filteredTasks.length} tâches en cours. Pour une durée de : {filteredTasks.reduce((acc, task) => acc + Number(task.duration), 0)} mn
      </div>
      {sortedTasks.map(task => (
        <Task key={task.id} task={task} setTasksToDo={setTasksToDo} setTasksDone={setTasksDone} />
      ))}
    </div>
);
}
export default Todo;
