import { useEffect } from 'react'
import Home from '../tomato/home/Home'
import Work from '../tomato/work/Work'
import './Tomato.css'
import tomatobg from '../assets/bg-tomato.jpg'

const Tomato = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <div className="bg-tomato"
          style={{backgroundImage: `url(${tomatobg})`}}
        />
        <div className="bg-filter"/>
        <div className="bg-rounder"/>
        <Home/>
        <Work/>
    </>
  )
}

export default Tomato