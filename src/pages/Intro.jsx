import { motion, useScroll } from 'framer-motion'

import Home from '../components/home/Home'
import About from '../components/about/About'
import Projects from '../components/projects/Projects'


const Intro = () => {
    const { scrollYProgress } = useScroll();
  return (
    <>
        <motion.div
        className='bar'
        style={{scaleX: scrollYProgress}}
        />
        <motion.div className="bg"
            animate={{ zoom: [1, 1.3, 1.3,1]}}
            transition={{ duration: 20,
            repeat: Infinity
            }}
        
        ></motion.div>
        <Home/>
        <About/>
        <Projects/>
    </>
  )
}

export default Intro