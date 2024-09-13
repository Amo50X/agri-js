import React, { useEffect } from 'react'
import Home from '../maize/home/Home'
import Work from '../maize/work/Work'
import './Maize.css'
import maizebg from '../assets/bg-maize.jpg'


const Maize = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-maize"
        style={{backgroundImage: `url(${maizebg})`}}
      />
      <div className="bg-filter"/>
      <Home/>
      <Work/>
    </>
  )
}

export default Maize