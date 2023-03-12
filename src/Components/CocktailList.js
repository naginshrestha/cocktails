import React, { useContext } from 'react'
import { Cocktail } from './Cocktail'
import { Loading } from './Loading'
import { AppContext } from '../Services/Context'


export const CocktailList = () => {

    const {cocktails,loading} = useContext(AppContext);
    console.log(cocktails);

    if(loading){
        return <Loading/>
    }

    if(cocktails.length <1){
        return(
            <div >
                <h4 className='text-center mt-5'>No cocktails matched your search !!!</h4>
            </div>
        )
    }

  return (
    <>
    <h2 className='text-center mt-5'>Cocktails</h2>
    <div className='d-flex flex-wrap justify-content-center align-items-center'>
        {
            cocktails.map((item,i)=> (<Cocktail key={i} {...item}/>))
        }
    </div>
    </>
  )
}

