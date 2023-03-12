import React from 'react'
import { Form, Link } from 'react-router-dom'

export const Cocktail = ({image, name,id,info,glass}) => {
  return (
    <div className='gap-3 mt-4  cocktail-container justify-content-cemter align-item-center'>

      <div className='frame shadow'>
      <img className='iamges ' src={image} alt="Something went wrong"/>

     <div className='mt-4  cocktails-button'>
         <h3 className='text-center'>{name}</h3>
         <h5>{glass}</h5>
         <p className='text-secondary '>{info}</p>
         
         <div className=' cocktails-info'>



         <Link to={`/cocktail/${id}`} className='nav-link '>More Info...</Link>
         </div>
        
     </div>
    </div>
  </div>
  )
}