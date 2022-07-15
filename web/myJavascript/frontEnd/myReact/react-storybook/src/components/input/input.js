import React from 'react';
import './input.css';

function Input(props) {
    const { variant='Large' } = props
    return (
        <input 
            type={'text'} 
            className={`input ${variant}`} 
            placeholder='Enter anything'
        />
      );
}

export default Input;