import React from 'react'

const FeatureCard = ({card}) => {
  const { id, name, vito } = card
  return (
    <div className={`${vito} w-full h-[40rem] flex flex-col justify-end p-2 text-xl text-white font-semibold relative ${id === 1 && 'text-black'}`}>
      <h1 className='absolute -right-3 top-2 text-white/50 text-[7rem]'>
        {id}
      </h1>
      <p>
        {name}
      </p>
      <p>
        View all projects
      </p>
    </div>
  )
}

export default FeatureCard