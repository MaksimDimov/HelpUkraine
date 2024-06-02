import React from 'react'; // Importing React library
import Button from './Button.js'; // Importing Button component
import '../style/index.css'; // Importing CSS style

// Banner component definition
function Banner(props) {
  let mainButton = "main-button"; // Style for main button
  let secondaryButton = "secondary-button"; // Style for secondary button

  return (
    <section className="banner-back"> {/* Banner section */}
      <div className="container"> {/* Container for banner content */}
        <div className="container-text"> {/* Container for text */}
          <p className="banner-text">{props.HelpNowLine}</p> {/* Help Now text */}
          <p className="banner-text">{props.SaveLaterLine}</p> {/* Save Later text */}
        </div>
        <div> {/* Container for buttons */}
          <Button text="Help Now" style={mainButton} /> {/* Help Now button */}
          <Button text="Know More" style={secondaryButton} /> {/* Know More button */}
        </div>
      </div>
    </section>
  );
}

export default Banner; // Exporting Banner component
