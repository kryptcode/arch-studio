import React from 'react'

const Hero = () => {
  return (
    <div className="my-12 relative ">
        <div className="w-[80%] mx-auto flex flex-col md:flex-row space-y-10 md:space-y-0 items-end justify-between space-x-0 md:space-x-12 relative ">
            <div className='flex-1 '>
                <img src="./assets/contact/desktop/image-hero.jpg" alt="" />
            </div>
            <div className='flex-1 px-0 md:px-12'>
                <h1 className="text-slate-300 hidden md:block text-[6rem] font-bold absolute top-0 left-[40%] ">
                    Contact
                </h1>
                <h2 className="text-6xl font-bold mb-6 ">
                    Tell us about your project
                </h2>
                <p className="text-gray-500">
                We’d love to hear more about your project. Please,
                leave a message below or give us a call. We have two
                offices, one in Texas and one in Tennessee. If you find
                yourself nearby, come say hello! 
                </p>
            </div>
        </div>
        <div className='hidden md:inline-block absolute rotate-90 tracking-[0.5em] font-semibold text-lg uppercase text-gray-400 top-24 left-0'>
            Contact
        </div>
    </div>
  )
}

export default Hero