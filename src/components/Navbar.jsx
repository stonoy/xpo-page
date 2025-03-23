import React from 'react'
import Menu from './Menu'

const Navbar = () => {
  return (
    <div className="navbar justify-evenly bg-base-100 shadow-sm">
  <div className='flex gap-4 items-center'>
  <div className="">
    <img src='./xpo-logistics-logo.svg' className='w-24 h-24' />
  </div>
  <Menu />
  </div>
  <div className="flex gap-1">
  <div className="relative inline-block">
  <input 
    type="text" 
    placeholder="Search" 
    className="input input-bordered w-32 md:w-60 pr-10"
  />
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth="2" 
    stroke="currentColor" 
    className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M9.75 17a7.25 7.25 0 1 1 7.25-7.25 7.25 7.25 0 0 1-7.25 7.25z" />
  </svg>
</div>
    <button className='btn btn-ghost'>Sign In</button>
  </div>
  <div>
    <button className='btn btn-outline btn-secondary mr-1'>Talk to Sales</button>
    <button className='btn btn-active btn-secondary'>Try for Free</button>
  </div>
</div>
  )
}

export default Navbar