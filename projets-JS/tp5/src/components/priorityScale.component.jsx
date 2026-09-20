import React from 'react';
import PriorityLevel from './priorityLevel.component.jsx';
import '../assets/style/priorityScale.css';

/**
 * priorityscale is a component to show the full priority scale
 * it shows six levels from one to six using prioritylevel components
 * it uses the current priority and can change it with setpriority
 * 
 * @param {number} priority - the current selected priority
 * @param {function} setPriority - the function to change the priority
 * @returns the full scale with six priority levels
 */

const PriorityScale = ({ priority, setPriority }) => {
  return (
    <div className="scale">
      {[1, 2, 3, 4, 5, 6].map(level => (
        <PriorityLevel key={level} level={level} priority={priority} setPriority={setPriority} />
      ))}
    </div>
  );
};

export default PriorityScale;
