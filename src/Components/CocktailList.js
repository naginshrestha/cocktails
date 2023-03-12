import React, { useContext } from 'react'
import { Cocktail } from './Cocktail'
import { Loading } from './Loading'
import { AppContext } from '../Services/Context'


export const CocktailList = () => {

    const {cocktails,loading} = useContext(AppContext);



    if(loading){
        return <Loading/>
    }

    if(cocktails.length <1){
        return(
            <div>
                <h2>no cocktails matched your search</h2>
            </div>
        )
    }


  return (
    <div>CocktailList</div>
  )
}

