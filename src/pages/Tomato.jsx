import { useEffect } from 'react'
import Home from '../tomato/home/Home'
import Work from '../tomato/work/Work'
import './Tomato.css'

const Tomato = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <div className="bg-tomato"/>
        <div className="bg-filter"/>
        <div className="bg-rounder"/>
        <Home/>
        <Work/>
    </>
  )
}

export default Tomato