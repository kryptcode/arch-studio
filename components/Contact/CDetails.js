import { ArrowRightIcon } from '@heroicons/react/outline'
import React from 'react'

const CDetails = () => {
  return (
    <div className='w-[80%] mx-auto flex flex-col md:flex-row justify-between my-40'>
        <div>
            <h1 className='text-5xl font-bold w-full md:w-2/3'>
                Contact Details
            </h1>
        </div>
        <div>
            <h3 className='text-lg font-semibold'>
                Main Office
            </h3>
            <p className='text-gray-500 font-medium py-1'>
                Mail: archone@mail.com
            </p>
            <p className='text-gray-500 font-medium py-1'>
                Address: 1892 Chenoweth Drive TN
            </p>
            <p className='text-gray-500 font-medium py-1'>
                Phone: 123-456-3451
            </p>
            <div className='flex items-center py-2 space-x-2'>
                <span>
                    View on Map
                </span>
                <ArrowRightIcon className='h-6' />
            </div>
        </div>
        <div>
            <h3 className='text-lg font-semibold'>
                Office II
            </h3>
            <p className='text-gray-500 font-medium py-1'>
                Mail: archtwo@mail.com
            </p>
            <p className='text-gray-500 font-medium py-1'>
                Address: 3399 Wines Lane TX
            </p>
            <p className='text-gray-500 font-medium py-1'>
                Phone: 832-123-4321
            </p>
            <div className='flex items-center py-2 space-x-2'>
                <span>
                    View on Map
                </span>
                <ArrowRightIcon className='h-6' />
            </div>
        </div>
    </div>
  )
}

export default CDetails