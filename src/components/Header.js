import React from 'react'; // Importing React library to create components
import '../style/index.css'; // Importing CSS file for styling

// Header component definition
function Header(props) {
  return (
    <header> {/* Header section */}
      <div className="header-div"> {/* Container div for header content */}
        <h1>{props.title}</h1> {/* Displaying title passed as prop */}
        <nav> {/* Navigation section */}
          <ul className="header-list"> {/* Unordered list for navigation links */}
            <li>
              <a href="#home" className="header-option">{props.home}</a> {/* Home link */}
            </li>
            <li>
              <a href="#about" className="header-option">{props.about}</a> {/* About link */}
            </li>
            <li>
              <a href="#contact" className="header-option">{props.contact}</a> {/* Contact link */}
            </li>
            <li>
              <a href="#donate" className="header-option">{props.donate}</a> {/* Donate link */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header; // Exporting Header component for use in other parts of the application
