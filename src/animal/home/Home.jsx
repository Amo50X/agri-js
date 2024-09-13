import './Home.css'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <section className='animal-home'>
      <h1>Animal Counting</h1>
      <div className="animal-info">
        <div className="">
          <h3>
            Counting animals in the wild or on farms is essential for monitoring
            populations, managing resources, and ensuring ecological balance.
            However, manual counting methods are often time-consuming, prone to
            errors, and difficult to scale across large areas. This animal
            counting application leverages computer vision and deep learning to
            automate the process, providing a more efficient and accurate solution.
          </h3>
          <br/>
          <br/>
          <h3>
            By analyzing images or video footage captured by drones, cameras, or
            other monitoring devices, the application can detect and count individual
            animals, even in complex environments with varied lighting and backgrounds.
            Utilizing advanced algorithms such as convolutional neural networks (CNNs),
            the system is trained to recognize different species and track their
            movements over time. This technology not only reduces the labor required for
            animal counting but also offers valuable insights into animal behavior,
            population dynamics, and habitat utilization, making it a powerful tool for
            wildlife conservation, livestock management, and environmental research.
          </h3>
        </div>
        

        <motion.img src="./assets/animals.jpg" alt=""
          whileHover={{ scale: 0.9 }}
        />
      </div>
    </section>
  )
}

export default Home