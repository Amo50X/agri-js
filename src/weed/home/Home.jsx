import './Home.css'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <section className='weed-home'>
        <h1>Weed Detection</h1>
        <div className="weed-info">
            <h2>Finding weed infestation in the field may be done precisely and accurately with weed detection. 
                The analysis helps you identify weed-infested regions ahead of time, which makes it simple to 
                make variable prescription maps, take prompt, effective corrective action during the growing 
                season, improve your weed management methods, and apply the right amount of herbicide where it 
                is needed. In the end, you will gain from higher herbicide savings and more efficient in-field 
                equipment. Additionally, Agremo Weed Dretection analysis is beneficial to the environment since 
                it lessens the chance of herbicide runoff and minimizes the overapplication of herbicide.
            </h2>    
            <motion.img src="src/assets/weed.jpg" alt="" 
                whileHover={{scale:0.9}}
            />        
        </div>
    </section>
  )
}

export default Home