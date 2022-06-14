import { ArrowRightIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'

const Button = () => {
  const router = useRouter()
  return (
    <button onClick={() => router.push('portfolio')} className='flex space-x-4 p-3 px-4 bg-gray-900 hover:bg-gray-600 transition-all duration-200 ease-in text-white items-center'>
        <span className='text-lg font-medium tracking-wider'>See Our Portfolio</span>
        <ArrowRightIcon className='h-8 ' />
    </button>
  )
}

export default Button