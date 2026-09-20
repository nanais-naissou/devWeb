import React, { useEffect, useState } from 'react';
import AddTask from './addTask.component.jsx';
import ToDo from './toDo.component.jsx';
import Done from './done.component.jsx';
import tasksData from '../data/tasksData';
import '../assets/style/taskApp.css';


/**
 * app is the main component of the task manager
 * it shows the title the addtask component the todo list and the done list
 * it uses two lists one for tasks to do and one for tasks done
 * when a task is marked as done it moves from todo to done
 * when the app starts it makes sure all tasks have a priority
 * 
 * @returns the full task application interface
 */

const App = () => {
  const [tasksToDo, setTasksToDo] = useState(tasksData);
  const [tasksDone, setTasksDone] = useState([]);

  const asDone = (taskId) => {
    const taskToMark = tasksToDo.find(task => task.id === taskId);
    taskToMark.done = true;
    setTasksToDo(prevTasks => prevTasks.filter(task => task.id !== taskId));
    setTasksDone(prevTasks => [...prevTasks, taskToMark]);
  };

  useEffect(() => {
    const tasksPriority = tasksData.map(task => ({...task, priority: task.priority || 1}));   
    setTasksToDo(tasksPriority);
  }, []);  

  return (
    <div className="taskApp">
      <h1>Gestion des tâches</h1>
      <AddTask tasks={tasksToDo} setTasksToDo={setTasksToDo} />
      <ToDo tasks={tasksToDo} setTasksToDo={setTasksToDo} setTasksDone={setTasksDone} markAsDone={asDone}/>
      <Done tasks={tasksDone} />
    </div>
  );

};

export default App;
