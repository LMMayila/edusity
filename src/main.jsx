import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const port = import.meta.env.PORT || 5173; 
console.log(`Server is running on port: ${port}`);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);