import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });  
    
       // useEffect ( () => {
    //     getGifs( category )
    //         .then ( imgs => setImages( imgs) )
    // }, [ category ])
    
    useEffect ( ()=> {

        getGifs( category )
               .then (imgs => {

                    

                        setState({
                            data: imgs,
                            loading: false
                        });
                        
                   

               })

    },[category])

//    setTimeout (()=> {
//        setState({
//            data: [1,2,3,5,6,7],
//            loading: false
//        })
//    })

    return state;
}