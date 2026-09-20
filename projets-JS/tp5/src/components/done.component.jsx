import React from 'react';
import DoneTask from './doneTask.component.jsx';

/**
 * done is a component that shows the list of done tasks
 * it takes the tasks as a prop and shows each task with donetask component
 * it shows a title and the list of tasks that are done
 * 
 * @param {array} tasks - the list of tasks that are already done
 * @returns  the part of the page that shows the done tasks
 */
const Done = ({ tasks }) => (
  <div className="tasklist done">
    <h3>Tâches terminées </h3>
    {tasks.map(task => (
      <DoneTask key={task.id} task={task} />
    ))}
  </div>
);

export default Done;
