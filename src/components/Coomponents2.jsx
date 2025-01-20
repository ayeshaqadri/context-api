// Component2.jsx
import React, { useContext } from 'react';
import { GlobalContext } from '../context';
import './ComponentStyles.css';

export const Component2 = () => {
    const { state, dispatch } = useContext(GlobalContext);

    return (
        <div className="component-container">
            <h1 className="component-title">Component 2</h1>
            <p className="component-number">Current Number: {state.myNum}</p>
            <button
                className="btn btn-subtract"
                onClick={() => dispatch({ type: 'SUB' })}
            >
                Decrease the Number
            </button>
        </div>
    );
};
