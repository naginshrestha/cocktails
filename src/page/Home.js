import React from 'react'
import { CocktailList } from '../Components/CocktailList'
import { Layout } from '../Components/Layout'
import { SearchForm } from '../Components/SearchForm'


export const Home = () => {
  return (
    <div >

     
           <div> 
            <SearchForm/>
            <CocktailList/>
           </div>
       
    </div>
  )
}

