import React from 'react'
import ScreenPage from './ScreenPage'
// import { Outlet } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="App flex w-[100%]  h-[100vh] flex-col justify-center items-center">
      <div className='flex w-full justify-center h-[10vh] border-2 border-black'>
          <h1 className='text-black-800 font-bold text-3xl uppercase'>Product Catalog</h1>
      </div>
      <div className='h-[90vh] w-[85%] '>
        <ScreenPage/>
      </div>
      
      
    </div>
  )
}

export default LandingPage
