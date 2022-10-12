import React from 'react'

import { RiUserFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";

const Streamline = () => {
  return (
    <section className=' flex flex-col justify-center items-center p-4 mt-6'>
      <h1 className='text-3xl font-bold text-slate-900'>How are you planning to use Eden?</h1>
      <p className='text-base font-normal pt-2 text-gray-500'>We'll streamline your setup experience accordingly.</p>

      <div className='mt-6 w-2/3 font-medium'>
        <div className=' flex gap-8 pb-4'>

          <div className='flex flex-col text-left p-5  border border-gray-200 rounded'>
            <RiUserFill className='mt-2 mb-3 w-5 h-6' />
            <h2 className='text-lg font-semibold text-gray-800'>For myself</h2>
            <p className=' font-normal pt-2 text-gray-500  text-sm'>Write better. Think more clearly. Stay organized</p>
          </div>

          <div className='flex text-left flex-col p-5 border border-gray-200 rounded'>
            <HiUserGroup className='mt-2 mb-3 w-5 h-6' />
            <h2 className='text-lg font-semibold text-gray-800'>With my team</h2>
            <p className=' font-normal pt-2 text-gray-500  text-sm'>Wikis, docs, tasks and projects, all in one place.</p>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Streamline;

