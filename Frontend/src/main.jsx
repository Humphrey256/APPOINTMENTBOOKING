import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './index.html';
import { BrowserRouter } from 'react-router-dom';

console.log('Rendering App component'); // This should confirm rendering

const App = () => {
    return <h1>Hello from Main.jsx!</h1>;
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
