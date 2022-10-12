import React from 'react'
import logo from '../images/logo.png'

const Header = () => {
  return (
    <div className='bg-white flex justify-center items-center p-4 pt-16 '>
      <div className='h-12 w-12 '>
        <img src={logo} alt="logo" />
      </div>
      <h1 className='text-3xl font-bold'>Eden</h1>
    </div>
  )
}

export default Header