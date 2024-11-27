import React from 'react'
import './App.css';
import Layout from "./layout/layout"; // Ensure the import path is correct
import { BrowserRouter } from 'react-router-dom';

function App() {
  <div>Hello, React!</div>
  console.log('App component loaded'); // Log to confirm loading
  return (
    <BrowserRouter>
      <Layout /> {/* Render Layout here */}
    </BrowserRouter>
  );

}

export default App;
