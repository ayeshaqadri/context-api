// Component1.jsx
import React, { useContext } from 'react';
import { GlobalContext } from '../context';
import './ComponentStyles.css';

export const Component1 = () => {
    const { state, dispatch } = useContext(GlobalContext);

    return (
        <div className="component-container">
            <h1 className="component-title">Component 1</h1>
            <p className="component-number">Current Number: {state.myNum}</p>
            <button
                className="btn btn-add"
                onClick={() => dispatch({ type: 'ADD' })}
            >
                Add a Number
            </button>
        </div>
    );
};
