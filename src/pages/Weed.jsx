import './Weed.css'
import Home from '../weed/home/Home'
import Work from '../weed/work/Work'
import { useEffect } from 'react'
import weedbg from '../assets/bg-weed.jpg'

const Weed = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-weed"
        style={{backgroundImage: `url(${weedbg})`}}
      />
      <div className="bg-filter"/>
      <Home/>
      <Work/>
    
    </>
  )
}

export default Weed