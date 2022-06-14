import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel"
import Button from "./Button"

const Hero = () => {
  return (
    <div className='relative mb-12'>
      
      <div className='w-[80%] mx-auto'>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        {/* Paramour */}
        <div className="paramour py-[7.5rem] text-left">
          <div className="w-[85%] mx-auto">
            <h2 className='text-6xl w-full md:w-[40%] text-white font-semibold tracking-wider'>
              Project Paramour
            </h2>
            <p className="py-5 text-gray-100 text-lg w-full md:w-[40%] ">
            Project made for an art museum near Southwest
            London. Project Paramour is a statement of bold,
            modern architecture. 
            </p>
            <Button />
          </div>
        </div>
          {/* Seraph */}
          <div className="seraph py-32 text-left">
            <div className="w-[85%] mx-auto">
              <h2 className='text-6xl w-full md:w-[40%] text-white font-semibold tracking-wider'>
                Seraph Station
              </h2>
              <p className="py-5 text-gray-100 text-lg w-full md:w-[40%] ">
                The Seraph Station project challenged us to design a unique station that would transport people through
                time. The result is a fresh and futuristic model inspired
                by space stations. 
              </p>
              <Button />
            </div>
          </div>
          {/* Federal */}
          <div className="federal py-32 text-left">
            <div className="w-[85%] mx-auto">
              <h2 className='text-6xl w-full md:w-[40%] text-white font-semibold tracking-wider'>
              Federal II Tower
              </h2>
              <p className="py-5 text-gray-100 text-lg w-full md:w-[40%] ">
                A sequel theme project for a tower originally built in the
                1800s. We achieved this with a striking look of brutal
                minimalism with modern touches. 
              </p>
              <Button />
            </div>
          </div>
          {/* trinity */}
          <div className="trinity py-32 text-left">
            <div className="w-[85%] mx-auto">
              <h2 className='text-6xl w-full md:w-[40%] text-white font-semibold tracking-wider'>
              Trinity Bank Tower 
              </h2>
              <p className="py-5 text-gray-100 text-lg w-full md:w-[40%] ">
              Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves
to blend design and stability to meet our objectives. 
              </p>
              <Button />
            </div>
          </div>
      </Carousel>
      </div>
      <div className='hidden md:inline-block absolute rotate-90 tracking-[1.4em] font-semibold text-lg text-gray-400 top-16 left-3'>
        HOME
      </div>
    </div>
  )
}

export default Hero