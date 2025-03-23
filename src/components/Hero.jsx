import React from 'react'

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row mt-10 items-center justify-between gap-8 px-6 md:px-12">
  {/* Left Content */}
  <div className="max-w-lg text-center md:text-left">
    <h1 className="text-4xl font-bold leading-tight text-gray-800">
      XPO Logistics is where the future works
    </h1>
    <p className="mt-3 text-gray-600 text-lg leading-relaxed">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam blanditiis 
      inventore modi, recusandae rerum doloribus?
    </p>
    
    {/* Buttons */}
    <div className="mt-6 flex flex-col sm:flex-row gap-3">
      <button className="btn btn-outline btn-secondary px-6 text-lg rounded-lg shadow-md">
        Try for Free
      </button>
      
      <button className="btn btn-secondary btn-active flex items-center gap-2 px-6 text-lg rounded-lg shadow-md">
        <svg aria-label="Google logo" width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
            <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
            <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
            <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
          </g>
        </svg>
        Sign Up with Google
      </button>
    </div>
  </div>

  {/* Right Image */}
  <div className="flex justify-center">
    <img src="./hero-pic.jpg" className="w-full max-w-sm md:max-w-md h-56 md:h-64 object-cover rounded-lg shadow-lg" />
  </div>
</section>

  )
}

export default Hero