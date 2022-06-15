import LCard from './LCard'

const LGrid = () => {
  return (
    <div className='w-[80%] mx-auto flex flex-col md:flex-row space-y-6 md:space-y-0 my-52'>
        <div className='flex-1'>
            <h1 className='text-5xl font-bold w-full md:w-1/2'>
                The Leaders
            </h1>
        </div>
        <div className='flex-[2] grid grid-cols-1 md:grid-cols-2 gap-8 '>
            <LCard name={'Jake Richards'} img='./assets/about/desktop/avatar-jake.jpg' position={'Chief Architect'} />
            <LCard name={'Thompson Smith'} img='./assets/about/desktop/avatar-thompson.jpg' position={'Head of Finance'} />
            <LCard name={'Jackson Rourke'} img='./assets/about/desktop/avatar-jackson.jpg' position={'Lead Designer'} />
            <LCard name={'Maria Simpson'} img='./assets/about/desktop/avatar-maria.jpg' position={'Senior Architect'} />
        </div>
    </div>
  )
}

export default LGrid