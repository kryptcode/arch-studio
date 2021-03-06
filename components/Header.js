import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { useState } from 'react'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  return (
    <>
      <header className='flex items-center justify-between py-8 w-[80%] mx-auto '>
          <div className='cursor-pointer' onClick={() => router.push('/')}> 
              <img src="./assets/logo.svg" alt="" />
          </div>
          <div className='hidden md:flex flex-grow space-x-8 ml-24 text-lg font-semibold text-gray-600'>
              <p className='cursor-pointer hover:text-black transition-all duration-200 ease-in-out' onClick={() => router.push('/portfolio')}>Portfolio</p>
              <p className='cursor-pointer hover:text-black transition-all duration-200 ease-in-out' onClick={() => router.push('/about')}>About Us</p>
              <p className='cursor-pointer hover:text-black transition-all duration-200 ease-in-out' onClick={() => router.push('/contact')}>Contact</p>
          </div>
          <div className='md:hidden flex p-3 hover:bg-gray-200 rounded-full transition-all cursor-pointer duration-200' onClick={() => setIsOpen(!isOpen)}>
              {
                isOpen ? (
                  <XIcon className='h-8' />
                ) : (
                  <MenuIcon className='h-8' />
                )
              }
          </div>
      </header>
      {
        isOpen && (
          <div className='flex flex-col items-center h-80 space-y-8 text-lg font-semibold md:hidden'>
            <p className='cursor-pointer hover:underline' onClick={() => router.push('/portfolio')}>
              Portfolio
            </p>
            <p className='cursor-pointer hover:underline' onClick={() => router.push('/about')}>
              About Us
            </p>
            <p className='cursor-pointer hover:underline' onClick={() => router.push('/contact')}>
              Contact
            </p>
          </div>
        )
      }
    </>
  )
}

export default Header