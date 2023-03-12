import React from 'react'
import { useState ,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { Layout } from '../Components/Layout'
import { Loading } from '../Components/Loading'

const url ='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

export const SingleCocktails = () => {
  const {id} = useParams();
  const[loading,setloading] = useState(false)
  const [cocktails,setCocktails] = useState(null)

  useEffect(()=>{
    setloading(true)

    const cocktaildetails =async()=>{
      try {

        const response = await fetch(`${url}${id}`)
        const {drinks} = await  response.json();


        if(drinks){

          const {strDrink:name,strDrinkThumb:image,strAlcoholic:info ,strCategory:category, 
            strGlass:glass,strInstructions:instruction,strIngredient1,
            strIngredient2,strIngredient3,strIngredient4,strIngredient5  } = drinks[0];

            const strIngredient =[strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5  ]
            const newCocktails ={name,image,info,category,glass,instruction}

            setCocktails(newCocktails)
        }
        else{
        setCocktails(null)
        }

        setloading(false)
        
      } catch (error) {
        console.log(error)
        
      }
    }
    cocktaildetails();

  },[id])
  

  if(loading){
    return <Loading />   
  }

  if(!cocktails){
    return(
      <div >
          <h4 className='text-center mt-5'>No cocktails to display !!!</h4>
      </div>
  )
  }

  const {name,image,info,category,glass,instruction} = cocktails;
  return (
     <section className='mt-1'>

      <div className='nav-back p-1'>
      <Link to='/' className="nav-link text-center">BACK HOME</Link>
      </div>
      <div className='d-grid m-auto drinks'> 

      <div className=' drinks-content mt-5 bg-light shadow d-flex justify-content-start align-items-center'>

        <div className='drinks-left'>
        <img className='drinks-img justify-content-start ' src={image} alt={name}/>

        </div>

        <div className='drinks-info  d-flex flex-column justify-content-start align-items-start'>

          <p className=''>
            <span>Name: </span>{name}
          </p>

          <p>
            <span>Category: </span>{category}
          </p>

          <p>
            <span>Info: </span>{info}
          </p>

          <p>
            <span>Glass: </span>{glass}
          </p>

          <p>
            <span>Instruction: </span>{instruction}
          </p>

        </div>

      </div>
      </div>
     </section>
  )
}
