import React from 'react';
import '../assets/style/priorityLevel.css';

/**
 * prioritylevel is a component to show one level of priority
 * it changes the priority when clicked
 * if the current priority is greater or equal to the level it is on otherwise it is off
 * 
 * @param {number} level - the number of this level
 * @param {number} priority - the current selected priority
 * @param {function} setPriority - the function to change the priority
 * @returns one clickable priority level
 */

const PriorityLevel = ({ level, priority, setPriority }) => {
  const click = () => setPriority(level);

  return (
    <div
      className={`level ${priority >= level ? 'on' : 'off'}`}
      onClick={click}
    ></div>
  );
};

export default PriorityLevel;
