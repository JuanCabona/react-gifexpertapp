import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { useEffect, useState } from 'react';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GiftGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

   const { data:images, loading } = useFetchGifs( category);


    return (
        <>
        <h3>{ category }</h3>

        { loading && <p>Loading</p> }
       
    <div className='card-grid'>
        
        {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }      
      
    </div>
    </>
  )
}
