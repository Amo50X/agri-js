import './Home.css'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <section className='tomato-home'>
        <h1>Tomato Classification</h1>
        <div className="tomato-info">
            <h2>
              This application harnesses the power of advanced computer vision 
              technology to accurately classify tomatoes into three stages of 
              ripeness: green, half-ripened, and fully ripened. By analyzing 
              high-resolution images, the system detects subtle color changes and 
              patterns that indicate the ripeness level of each tomato. This 
              precision-driven approach enables farmers to make informed decisions 
              about the optimal time for harvesting, ensuring that tomatoes are p
              icked at their peak quality. Additionally, suppliers and retailers 
              can use the application to manage inventory more efficiently, 
              reducing waste and ensuring that consumers receive the freshest 
              produce. With its user-friendly interface and robust classification 
              capabilities, this application is a valuable tool for the entire 
              supply chain in the agricultural industry.
            </h2>    
            <motion.img src="./assets/tomato.jpg" alt="" 
                whileHover={{scale:0.9}}
            />        
        </div>
    </section>
  )
}

export default Home