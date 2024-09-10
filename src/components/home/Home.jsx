import React from 'react'
import { motion } from 'framer-motion'
import './Home.css'

const Home = () => {
  return (
    <motion.section className='home'
      initial = {{
        opacity : 0,
        scale : 0.5
      }}
      animate = {{ 
        opacity: 1,
        scale : 1
      }}
      transition={{
        duration:0.8
      }}
    
    >
        <div className="home-text">
            <h1>Artificial Intelligence in Agriculture</h1>
            <h3>We invest our time in improving agriculture with AI to get good and accelerate</h3>
            <h3>crop production.</h3>
        </div>
    </motion.section>
  )
}

export default Home