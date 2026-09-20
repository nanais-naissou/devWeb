import React from 'react';
import '../assets/style/doneButton.css';

/**
 * donebutton is a button that shows a checkmark symbol ✔
 * it is used to mark a task as done
 * when clicked it calls the onClick function
 * 
 * @param {function} onClick - the function to run when the button is clicked
 * @returns the button with the checkmark symbol
 */
const DoneButton = ({ onClick }) => (
  <div className="doneButton" onClick={onClick}>
     ✔
  </div>
);

export default DoneButton;
