import React from 'react';
import './App.css';
import {Component2} from './components/Coomponents2.jsx';
import {Component1} from './components/Component1.jsx'

function App() {
    return (
        <>
        <div className="app-container">
            <h1 className="app-title">React Global State Management</h1>
            <div className="components-wrapper">
                <Component1 />
                <Component2 />
            </div>
        </div>
        </>
    );
}

export default App;





