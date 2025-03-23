import React, { useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md'

const CookieBox = () => {
    const [showCookie, setShowCookie] = useState(true)
  return (
    <div className={`${showCookie ? "fixed" : "hidden"} w-72 bottom-4 left-4 right-4 md:left-auto md:right-6 bg-base-100 shadow-2xl p-4 rounded-lg flex flex-col items-center justify-between gap-4`}>
        <p className="text-sm mt-4 md:text-base">
          🍪 We use cookies to enhance your experience. By continuing, you agree to our Lorem ipsum dolor sit amet voluptatibus.{" "}
          <a href="#" className="underline text-secondary">Privacy Policy</a>.
        </p>
        <div className="flex flex-col gap-2">
          <button  className="btn btn-primary w-full">
            Accept All Cookies
          </button>
          <button className="btn btn-outline w-full">Learn More</button>
        </div>
        <MdOutlineCancel className="absolute top-2 right-2 rounded-full p-1 text-2xl inline-block cursor-pointer" onClick={() => setShowCookie(false)}/>
      </div>
  )
}

export default CookieBox