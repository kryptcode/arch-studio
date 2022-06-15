import React from 'react'

const LCard = ({ img, name, position }) => {
  return (
    <div>
        <img src={img} alt={name} />
        <div className='py-2'>
            <h5 className='text-lg font-semibold'>
                {name}
            </h5>
            <p>
                {position}
            </p>
            <div className='flex md:hidden space-x-5 items-center py-2'>
                <a href="#">
                    <img src="./assets/icons/icon-twitter.svg" alt="" />
                </a>
                <a href="#">
                    <img src="./assets/icons/icon-linkedin.svg" alt="" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default LCard