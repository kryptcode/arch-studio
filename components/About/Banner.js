import React from 'react'

const Banner = () => {
  return (
    <div className='w-[80%] mx-auto flex flex-col-reverse space-y-8 md:space-y-0 md:flex-row space-x-0 md:space-x-12 '>
        <div className='flex-1 flex flex-col justify-between'>
            <div className='h-[1px] w-16 bg-gray-400  ' />
            <h2 className='text-[5rem] leading-tight font-bold'>
                Our <br /> Heritage
            </h2>
            <div className='space-y-5 font-medium'>
                <p>
                Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.
                </p>
                <p>
                Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs.
                </p>
                <p>
                Our small team of world-class professionals provides input on every project.
                </p>
            </div>
        </div>
        <div className='flex-1'>
            <img src="./assets/about/desktop/image-heritage.jpg" alt="" />
        </div>
    </div>
  )
}

export default Banner