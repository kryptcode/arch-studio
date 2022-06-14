import React from 'react'
import { useRouter} from 'next/router'
import { ArrowRightIcon } from '@heroicons/react/outline'
import FeatureCard from './FeatureCard'

const cardsInfo = [
    {
        id: 1,
        vito: 'del-sol',
        name: 'Project Del Sol'
    },
    {
        id: 2,
        vito: 'tower',
        name: '228B Tower'
    },
    {
        id: 3,
        vito: 'proto',
        name: 'Le Prototype'
    },
]

const Featured = () => {
    const router = useRouter()
  return (
    <section className='w-[80%] mx-auto my-16 mt-32 '>
        <div className='flex justify-between items-center mb-8'>
            <h2 className='text-2xl md:text-5xl font-bold'>
                Featured
            </h2>
            <button onClick={() => router.push('portfolio')} className='flex space-x-4 p-1.5 px-2 md:p-3 md:px-4 bg-gray-900 hover:bg-gray-600 transition-all duration-200 ease-in text-white items-center'>
                <span className='text-lg font-medium tracking-wider'>See all</span>
                <ArrowRightIcon className='h-6 ' />
            </button>
        </div>

        <div className='flex flex-col md:flex-row justify-between space-x-0 md:space-x-8 space-y-6 md:space-y-0'>
            {
                cardsInfo.map(card => (
                    <FeatureCard key={card.id} card={card} />
                ))
            }
        </div>
    </section>
  )
}

export default Featured