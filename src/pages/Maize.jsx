import React, { useEffect } from 'react'
import Home from '../maize/home/Home'
import Work from '../maize/work/Work'
import './Maize.css'


const Maize = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-maize"/>
      <div className="bg-filter"/>
      <Home/>
      <Work/>
    </>
  )
}

export default Maize