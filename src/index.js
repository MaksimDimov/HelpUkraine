import React from 'react'; // Importing React library
import { createRoot } from 'react-dom/client'; // Importing createRoot method from react-dom/client
import App from './App'; // Importing App component
import './style/index.css'; // Importing styles

// Getting the root container element by ID
const container = document.getElementById('root');
// Creating a root for the React application
const root = createRoot(container);
// Rendering the App component within the root
root.render(<App />);
