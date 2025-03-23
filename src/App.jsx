import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Hero2 from "./components/Hero2";
import Footer from "./components/Footer";
import CookieBox from "./components/CookieBox";

const App = () => {
  const [showDialog, setShowdislog] = useState(true)
  return (
    <>
      <main className="align-element">
      <Navbar />
      {showDialog && <div className="flex items-center justify-between rounded-lg p-4 bg-primary text-primary-content">
        <h1 className="text-sm">Lorem ipsum dolor sit nostrum molestias exercitationem laborum, officiis commodi culpa a non! <a href="#" className="underline">Lets Go <span><FaLongArrowAltRight className="inline-block" /></span></a></h1>
        <MdOutlineCancel className="rounded-full p-1 text-2xl inline-block cursor-pointer" onClick={() => setShowdislog(false)}/>
      </div>}
      <Hero />
      <Logos />
      <Hero2 />
      <CookieBox />
    </main>
    <Footer />
    </>
  )
};

export default App;
