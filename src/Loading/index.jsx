import React from 'react'
import { TfiReload } from 'react-icons/tfi'

function Loader() {
  return (
    <div  className='flex gap-2 w-full min-h-screen justify-center items-center'>
        <p className='text-2xl text-indigo-600 font-semibold'>Loading</p>
        <p className='text-2xl text-indigo-600 font-semibold'><TfiReload /></p>
    </div>
  )
}

export default Loader