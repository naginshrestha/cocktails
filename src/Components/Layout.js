import React from 'react'
import { NavBar } from './NavBar'

export const Layout = ({children}) => {
  return (
    <div>
        <NavBar/> 

        <div className='main'>{children}</div>

        <footer className="mt-5 bg-dark text-light p-4 text-center">
        &copy; Copy right all reserver 2023
      </footer>

    </div>
  )
}
