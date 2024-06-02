import React from 'react'; // Importing React library

// Footer component definition
function Footer() {
  return (
    <footer> {/* Footer section */}
      <div className="container"> {/* Container for footer content */}
        <p> {/* Paragraph for footer information */}
          <span> 2024 </span> {/* Span for year */}
          Maksim Dimov {/* Footer author */}
          <span> | </span> {/* Separator */}
          <a href="https://github.com/MaksimDimov"> {/* GitHub link */}
            GitHub
          </a>
          <span> | </span> {/* Separator */}
          <a href="https://www.linkedin.com/in/maksim-dimov-6027ba299/"> {/* LinkedIn link */}
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer; // Exporting Footer component
