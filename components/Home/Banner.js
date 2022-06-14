import { ArrowRightIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import React from 'react'

const Banner = () => {
  const router = useRouter()
  return (
    <div className='w-[80%] relative mx-auto st-banner my-10 p-5 py-32 md:p-36 md:py-36'>
        <div className='text-white'>
            <h2 className='text-6xl font-bold mb-7'>
                Small team, <br /> big ideas
            </h2>
            <button onClick={() => router.push('portfolio')} className='flex space-x-4 p-5 px-6 bg-gray-900 hover:bg-gray-600 transition-all duration-200 ease-in text-white items-center cursor-pointer'>
                <span className='text-lg font-medium tracking-wider'>About Us</span>
                <ArrowRightIcon className='h-6' />
            </button>
        </div>
    </div>
  )
}

export default Banner