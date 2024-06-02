import React from 'react'; // Importing React library

// Button component definition
function Button(props) {
  return (
    <button className={props.style}> {/* Button element with className from props */}
      {props.text} {/* Text content of the button */}
    </button>
  );
}

export default Button; // Exporting Button component
