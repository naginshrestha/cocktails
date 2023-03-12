import React from 'react'
import { useContext ,useEffect} from 'react';
import { AppContext } from '../Services/Context'

export const SearchForm = () => {

     const {setSearchTearm} =useContext(AppContext);
     const searchval =React.useRef('');


     const searchCocktails = (e)=>{
      const val = e.target.value;
      setSearchTearm(val)
     }


     useEffect(()=>{
      searchval.current.focus();

      
     },[])

  return (
    <div className='mt-5 d-grid  justify-content-center align-items-center'>
        
    <div className='border shadow bg-light p-4'>
      <p className='text-center fs-4'> Search your Cocktail</p>
      <input onChange={searchCocktails} ref={searchval} className='search-input rounded-pill'/>
    </div>
   
       
    </div>
  )
}
