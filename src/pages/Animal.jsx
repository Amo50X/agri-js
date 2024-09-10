import React from 'react'
import { useEffect } from 'react'
import Home from '../animal/home/Home'
import Work from '../animal/work/Work'
import './Animal.css'

const Animal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-animal"/>
      <div className="bg-filter"/>
      <Home/>
      <Work/>
    </>
  )
}

export default Animal