import React from 'react'
import { useState } from 'react';


export const AddCAtegory = ({setCategories}) => {
  
    const [inputValue, setInputValue] = useState('');
    const handleInputchange = (e) => {
        setInputValue (e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2) {
            setCategories( cats => [inputValue, ...cats ]);
            setInputValue('');
        }

        
    }

    return (
    <form onSubmit={ handleSubmit }>
        <input
            type="text"
            value={ inputValue}
            onChange={ handleInputchange }
        />
    </form>
  )
}
