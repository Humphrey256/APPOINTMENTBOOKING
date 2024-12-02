import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
<<<<<<< HEAD
=======
import './index.html';
>>>>>>> bfee5f250fffeb4e5d8be21b911feedbe1ecbad3
import { BrowserRouter } from 'react-router-dom';

console.log('Rendering App component'); // This should confirm rendering

<<<<<<< HEAD
=======
const App = () => {
    return <h1>Hello from Main.jsx!</h1>;
};

>>>>>>> bfee5f250fffeb4e5d8be21b911feedbe1ecbad3
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
