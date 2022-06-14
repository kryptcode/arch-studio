import { useRouter } from 'next/router'
import React from 'react'

const Footer = () => {
    const router = useRouter()
  return (
    <footer className='flex flex-col md:flex-row  w-[80%] py-2 mx-auto items-center mt-24 '>
        <div className='p-8 py-10 bg-gray-800'>
            <img src="./assets/logo - white.svg" alt="" />
        </div>
        <div className='flex flex-grow space-x-8 ml-0 md:ml-24 text-lg mt-3 md:mt-0 font-semibold text-gray-600'>
            <p className='cursor-pointer hover:text-black transition-all duration-200 ease-in-out' onClick={() => router.push('/portfolio')}>Portfolio</p>
            <p className='cursor-pointer hover:text-black transition-all duration-200 ease-in-out' onClick={() => router.push('/about')}>About Us</p>
            <p className='cursor-pointer hover:text-black transition-all duration-200 ease-in-out' onClick={() => router.push('/contact')}>Contact</p>
        </div>
    </footer>
  )
}

export default Footer