import React from 'react'
import { useState } from 'react';
import { AddCAtegory } from './components/AddCAtegory';
import { GiftGrid } from './components/GiftGrid';

function GifExpertApp() {
 
 const [categories, setCategories] = useState(['One Punch']);

 const handleAdd = () => {
      setCategories([...categories,  'HunterXHunter' ]);
 }

  
 
 return (
    <>
    <h2>GifExpertApp</h2>
    <AddCAtegory setCategories={setCategories} />
    <hr />

    
        {/* <button onClick={ handleAdd}>Agregar</button> */}
        
        <ol>
        {
                categories.map ((category) => 
                    <GiftGrid 
                        key={category} 
                        category={ category } />)
            }
        </ol>
    
    </>
  )
}

export default GifExpertApp