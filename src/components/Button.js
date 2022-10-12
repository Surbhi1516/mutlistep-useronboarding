import React from 'react'

const Button = ({ handleClick, currentStep, steps }) => {
  return (

    <div onClick={() => handleClick()} className='flex items-center justify-center mx-3 '>
      <button className='bg-[#664DE5] text-white py-3 text-sm font-normal w-full mt-1 outline-none border-none rounded-md flex justify-center items-center w-2/3 '>{currentStep === steps.length ? "Launch Eden" : "Create Workspace"}</button>
    </div>


  )
}

export default Button