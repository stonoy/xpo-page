import React from 'react'

const Hero2 = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row-reverse mt-10 items-center justify-between gap-8 px-6 md:px-12">
  {/* Left Content */}
  <div className="max-w-lg text-center md:text-left">
    <h1 className="text-xl font-bold leading-tight text-gray-800">
      Now is your moment to build a better tomorrow
    </h1>
    <p className="mt-3 text-gray-600 text-md leading-relaxed">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam blanditiis 
      inventore modi, recusandae rerum doloribus?
    </p>
    
    {/* Buttons */}
    <div className="mt-6 flex flex-col sm:flex-row gap-3">
      <button className="btn btn-outline btn-secondary px-6 text-lg rounded-lg shadow-md">
        Watch Videos
      </button>
    </div>
  </div>

  {/* Right Image */}
  <div className="flex justify-center">
    <img src="./hero2-pic.jpg" className="w-full max-w-sm md:max-w-md h-56 md:h-64 object-cover rounded-lg shadow-lg" />
  </div>
</section>
  )
}

export default Hero2