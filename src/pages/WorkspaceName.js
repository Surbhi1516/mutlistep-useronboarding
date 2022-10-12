import React from 'react'


const WorkspaceName = () => {
  return (
    <section className=' flex flex-col justify-center items-center p-4 mt-6'>
      <h1 className='text-3xl font-bold text-slate-900'>Let's set up a home for all your work</h1>
      <p className='text-base font-normal pt-2 text-gray-400'>You can always create another workspace later.</p>

      <div className='mt-6 w-2/3 font-medium'>

        <div className='flex flex-col pb-2'>
          <label className='text-left text-sm font-medium pt-2 text-gray-600 pb-1 '>Workspace Name</label>
          <input type="text" placeholder='Eden' className='p-2 text-sm font-medium rounded border border-gray-200 outline-none' />
        </div>
        <div className='flex flex-col pb-3'>
          <label className='text-left text-sm font-medium pt-2 text-gray-600 pb-1' >Workspace URL <span className='text-gray-300'>(optional)</span> </label>

          <div className=' p-0 flex rounded border border-gray-200 '>
            <span className='text-sm text-gray-400 bg-[#F8F9FC] flex items-center justify-center px-2 '>www.eden.com/</span>
            <input type="text" placeholder='Example ' className='py-2  text-sm font-medium rounded-l-none rounded-r   pl-2 outline-none grow border-l border-gray-200' />
          </div>
        </div>

      </div>
    </section>
  )
}

export default WorkspaceName