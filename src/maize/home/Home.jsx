import './Home.css'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <section className='maize-home'>
        <h1>Maize Counting</h1>
        <div className="maize-info">
            <h3>
            Accurately counting maize plants in large fields is a critical yet 
            labor-intensive task in agriculture. Traditional methods are prone to 
            errors and are time-consuming, but advancements in computer vision 
            offer a powerful solution. This maize counting application uses deep 
            learning models, specifically convolutional neural networks (CNNs), 
            to automatically detect and count maize plants from aerial or 
            ground-level images. By analyzing images captured by drones,  
            satellites, or handheld devices, the application provides farmers 
            with fast, accurate, and scalable plant counts, helping to optimize 
            crop management strategies. This innovation not only improves accuracy 
            but also offers real-time insights into crop health and distribution, 
            making it an invaluable tool for enhancing productivity and sustainability 
            in maize cultivation.
            </h3>    
            <motion.img src="./assets/maize.jpg" alt="" 
                whileHover={{scale:0.9}}
            />        
        </div>
    </section>
  )
}

export default Home