import React from 'react'

const Welcome = () => {
  return (
    <section className='flex space-x-0 flex-col-reverse md:flex-row md:space-x-24 w-[80%] mx-auto relative py-2 my-24 '>
        <h1 className='absolute top-6 hidden md:block text-xl md:text-[6rem] lg:text-[10rem] font-bold tracking-[0.1em] text-slate-300 '>Welcome</h1>
        <div className='flex-[1.5]  space-y-8 pt-10 md:pt-24 px-0 md:px-8'>
            <h3 className='mt-3 text-gray-500 text-6xl font-bold'>
                Welcome to Arch Studio
            </h3>
            <p className='text-lg font-medium'>
            We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.
            </p>
            <p className='text-lg font-medium'>
                Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we
                create spaces that inspire and delight.
            </p>
            <p className='text-lg font-medium'>
                We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.
            </p>
        </div>
        <div className='w-full md:w-[22rem] h-[35rem] md:h-auto welcome-bg' />
    </section>
  )
}

export default Welcome