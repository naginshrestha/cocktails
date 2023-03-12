import { CircularProgress } from '@mui/material'
import React from 'react'

export const Loading = () => {
  return (
    <div className='progressbar d-grid justify-content-center align-items-center mt-5'>
        <CircularProgress  color="inherit" />
    </div>
  )
}
