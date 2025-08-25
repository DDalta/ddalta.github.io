import { useState } from 'react'

function App() {

  return (
    <>
    <div className='font-lexend'>
      <div className="text-center">
        <h1 className='text-9xl font-bold'>DANIEL PERALTA</h1>
      </div>
      <div className='flex justify-center text-2xl font-light'>
        <div className='flex flex-row divide-x-1'>
          <a className='px-3'>PROJECTS</a>
          <a className='px-3'>RESUME</a>
          <a className='px-3'>CONTACT</a>
        </div>
      </div>
      <div className='bg-[#eeeeee]'>
        <div className="w-1/2 m-auto">
          <div>
            <h2 className='text-4xl'>ABOUT ME</h2>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
