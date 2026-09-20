import React from 'react';

/**
 * donetask is a component that shows one task that is done
 * it uses the task prop to show the description and the duration
 * the task is shown with a special style for done tasks
 * 
 * @param {object} task - the task object with description and duration
 * @returns the visual block of a done task
 */

const DoneTask = ({ task }) => (
  <div className="task done">
    <div className="info">
      <p>{task.description}</p>
      <p> durée : {task.duration}</p>
    </div>
  </div>
);

export default DoneTask;
