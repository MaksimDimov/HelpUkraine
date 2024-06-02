import React from 'react';
import Header from "./components/Header.js"; // Importing Header component
import Banner from "./components/Banner.js"; // Importing Banner component
import Gallery from "./components/Gallery.js"; // Importing Gallery component
import Footer from "./components/Footer.js"; // Importing Footer component
import './style/index.css'; // Importing styles

// App component definition
function App() {
  const title = "Support Ukraine"; // Title for the header
  const home = "Home"; // Text for home link in header
  const about = "About"; // Text for about link in header
  const contact = "Contact"; // Text for contact link in header
  const donate = "Donate"; // Text for donate link in header
  const HelpNowLine = "Help Ukraine today!"; // Text for the main banner
  const SaveLaterLine = "Save your home tomorrow!"; // Text for the secondary banner

  // Array of photo objects with id, description, and img properties
  const photos = [
    {
      id: 1,
      description: "More than 14 million people left their homes because of the war.",
      img: "https://gdb.voanews.com/2B3601E6-E216-4442-9C13-55BB247CEC55_w1200_r1.jpg"
    },
    {
      id: 2,
      description: "Thousands of Ukrainians need medical help every day.",
      img: "https://i.guim.co.uk/img/media/e39e203cdd0982f1c99ee87b839822f77f960d31/0_272_5000_2999/master/5000.jpg?width=465&dpr=1&s=none"
    },
    {
      id: 3,
      description: "Even small sums of money can save lives.",
      img: "https://www.nysenate.gov/sites/default/files/press-release/main-image/fb_link_support_ukraine727.jpg"
    },
    {
      id: 4,
      description: "If Ukraine is saved, the world will be saved.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw6ylM2TvG2jac1s-29oWRXCZXRs3_4Bpiig&s"
    }
  ];

  // Rendering components: Header, Banner, Gallery, and Footer
  return (
    <>
      <Header title={title} home={home} about={about} contact={contact} donate={donate} />
      <Banner HelpNowLine={HelpNowLine} SaveLaterLine={SaveLaterLine} />
      <Gallery photos={photos} />
      <Footer />
    </>
  );
}

export default App; // Exporting App component
