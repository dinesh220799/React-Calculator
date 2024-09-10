import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = useState("");

  // Function to handle button clicks
  const handleButtonClick = (e) => {
    const newValue = e.target.value;
    setValue(value + newValue); // Append the new value to the current value
  };

  // Function to clear the input
  const clearInput = () => {
    setValue("");
  };

  // Function to delete the last character
  const deleteLast = () => {
    setValue(value.slice(0, -1));
  };

  // Function to evaluate the expression when "=" is pressed
  const calculateResult = () => {
    try {
      const result = eval(value); // Evaluate the expression in the input field
      setValue(String(result)); // Convert the result to a string and set it as the new value
    } catch (error) {
      setValue("Error"); // If there's an invalid expression, show an error
    }
  };

  return (
    <>
      <div className="container">
        <div className="calculator">
          <form action="">
            <div className="display">
              <input
                type="text"
                value={value}
                readOnly // Make it read-only to prevent manual typing
              />
            </div>
            <div>
              <input type="button" value="AC" onClick={clearInput} />
              <input type="button" value="DE" onClick={deleteLast} />
              <input type="button" value="." onClick={handleButtonClick} />
              <input type="button" value="/" onClick={handleButtonClick} />
            </div>
            <div>
              <input type="button" value="7" onClick={handleButtonClick} />
              <input type="button" value="8" onClick={handleButtonClick} />
              <input type="button" value="9" onClick={handleButtonClick} />
              <input type="button" value="*" onClick={handleButtonClick} />
            </div>
            <div>
              <input type="button" value="4" onClick={handleButtonClick} />
              <input type="button" value="5" onClick={handleButtonClick} />
              <input type="button" value="6" onClick={handleButtonClick} />
              <input type="button" value="+" onClick={handleButtonClick} />
            </div>
            <div>
              <input type="button" value="1" onClick={handleButtonClick} />
              <input type="button" value="2" onClick={handleButtonClick} />
              <input type="button" value="3" onClick={handleButtonClick} />
              <input type="button" value="-" onClick={handleButtonClick} />
            </div>
            <div>
              <input type="button" value="00" onClick={handleButtonClick} />
              <input type="button" value="0" onClick={handleButtonClick} />
              <input type="button" value="=" className="equal" onClick={calculateResult} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
