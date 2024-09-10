import { Link } from "react-router-dom"
import "./Projects.css"
import { motion } from "framer-motion"
import Weed from "../../pages/Weed"
import Animal from "../../pages/Animal"
import Maize from "../../pages/Maize"

const Projects = () => {
  return (
    <section className="projects">
        <h1>Projects</h1>
        
        <div className="cards">
            <motion.div href="/weed" className="card"
                whileHover={{
                    scale: 1.1,
                }}
            >
                <img src="src/assets/weeds.jpg" alt="" />
                <h2>Weed Detection</h2>
                <h5>This application is used to detect weeds on the field</h5>
                <Link className="link" to={"/weed"}>Read more</Link>
            </motion.div>
            <motion.div href="/maize" className="card"
                whileHover={{
                    scale: 1.1,
                }}
            >
                <img src="src/assets/maize.jpg" alt="" />
                <h2>Maize Counting</h2>
                <h5> Maize trees are counted to estimate the number of maize that could be produces</h5>
                <Link className="link" to={"/maize"}>Read more</Link>
            </motion.div>
            <motion.div href="/animal" className="card"
                whileHover={{
                    scale: 1.1,
                }}
            >
                <img src="src/assets/animal.jpg" alt=""  />
                <h2>Animal Counting</h2>
                <h5>Farmer can us this application to count there lifestock daily and monitor their behaviour</h5>
                <Link className="link" to={"/animal"}>Read more</Link>
            </motion.div>
            <motion.div href="/tomato" className="card"
                whileHover={{
                    scale: 1.1,
                }}
            >
                <img src="src/assets/tomato.jpg" alt=""  />
                <h2>Tomato Classification</h2>
                <h5>This tool classifies if a tomato is green, half ripened or fully ripened.</h5>
                <Link className="link" to={"/tomato"}>Read more</Link>
            </motion.div>
        </div>
    </section>
  )
}

export default Projects
