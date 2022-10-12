import React from 'react'


const PersonalInfo = () => {
  return (
    <section className=' flex flex-col justify-center items-center p-4 mt-6'>
      <h1 className='text-3xl font-bold text-slate-900'>Welcome! First things first...</h1>
      <p className='text-base font-normal pt-2 text-gray-500'>You can always change them later.</p>

      <div className='mt-6 w-2/3 font-medium'>

        <div className='flex flex-col pb-2'>
          <label className='text-left text-sm font-medium pt-2 text-gray-600 pb-1 '>Full Name</label>
          <input type="text" placeholder='Steve Jobs' className='p-2 text-sm font-medium rounded border border-gray-200 outline-none' />
        </div>
        <div className='flex flex-col pb-3'>
          <label className='text-left text-sm font-medium pt-2 text-gray-600 pb-1' >Display Name</label>
          <input type="text" placeholder='Steve ' className='p-2 text-sm font-medium rounded border border-gray-200 outline-none' />
        </div>

      </div>
    </section>
  )
}

export default PersonalInfo