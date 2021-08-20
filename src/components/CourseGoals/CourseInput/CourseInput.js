import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true); // do not use '' for boolean values in useState

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // to stop the user fronm entering empty records
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
      // with this return the function execution stops and we are not able to add empty records
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : '' }`}>
        {/* template literal it is */}
        <label>
          Course Goal
        </label>
        {/* inline styles with highest priority , here we hve to set the default also */}
        <input type="text" onChange={goalInputChangeHandler} />
        {/* style={{ backgroundColor: !isValid ? "salmon" : "white" ,  borderColor : !isValid ? "green" : "black"}} */}
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
