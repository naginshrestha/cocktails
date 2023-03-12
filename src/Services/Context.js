import React from 'react'
import { useState ,useEffect, useContext ,useCallback} from 'react'

const url ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppContext =React.createContext()

 const Context = ({children}) => {
  
    const[loading, setLoading] = useState(true)
    const[searchTerm, setSearchTearm] = useState('a')
    const[cocktails, setCocktails]= useState([])


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

