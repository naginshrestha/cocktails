import React from 'react'
import { useState ,useEffect, useContext ,useCallback} from 'react'

const url ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppContext =React.createContext()

 const Context = ({children}) => {
  
    const[loading, setLoading] = useState(true)
    const[searchTerm, setSearchTearm] = useState('')
    const[cocktails, setCocktails]= useState([])

    const dataFetch = useCallback( async() =>{
      setLoading(true)
      try {
      

        const response = await fetch(`${url}${searchTerm}`)
        const {drinks} = await response.json();

        if(drinks){

          const newCocktails = drinks.map((item)=>{

            const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass } = item;

            return {id:idDrink,name:strDrink,image:strDrinkThumb,info:strAlcoholic,glass:strGlass}

          })
          setCocktails(newCocktails)
          setLoading(false)

        }
        else{
          setCocktails([])
          setLoading(false)
        }


        
      } catch (error) {
        console.log(error);
        setLoading(false)
        
      }
    }, [searchTerm])

  useEffect(()=>{
    dataFetch();

  }, [searchTerm])



  return (
    <AppContext.Provider value={{loading,cocktails,setSearchTearm}}>
      {children}
        
    </AppContext.Provider>

  )
}

// export const useGlobalContext =()=>{
//   return useContext(AppContext)
// }   

export {AppContext , Context}

