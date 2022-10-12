import React from 'react'

const FinalPage = () => {
  return (
    <section className=' flex flex-col justify-center items-center p-4 mt-6'>
      <div className=' text-white bg-[#664DE5] rounded-full transition duration-500 ease-in-out h-14 w-14 flex items-center justify-center py-3 mb-7'>
        &#10003;
      </div>

      <h1 className='text-3xl font-bold text-slate-900'>Congratulations, Eren!</h1>
      <p className='text-base font-normal pt-3 pb-5 text-gray-500'>You have completed onboarding, you can start using the Eden!</p>

    </section>
  )
}

export default FinalPage