import './More.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const More = () => {
  return (
    <>
        <div className="bg-more"/>
        <div className="bg-filter"/>
        <h1>ARTIFICIAL INTELLIGENCE</h1>
        <div className="ai-cards">
            <motion.div className="ai-card"
                whileHover={{
                    scale: 1.1,
                }}
            >
                <img src="./assets/image.jpg" alt="" />
                <h2>Image Analyzer App</h2>
                <h5>The app allows the user to upload an image and receive imformation about the image</h5>
                <Link className="ai-link" to={"https://imageinterpreter.streamlit.app/"} target='blank'>Read more</Link>
            </motion.div>

            <motion.div className="ai-card"
                whileHover={{
                    scale: 1.1,
                }}
            >
                <img src="./assets/leaf.jpg" alt="" />
                <h2>Plant Disease Detection</h2>
                <h5>The website analyze the images using deep learning to identify whether the plants are healthy or affected by disease. 
                </h5>
                <Link className="ai-link" to={"https://plantdiseaserecognition-m52buqeupwx9gyo2w39wje.streamlit.app/"} target='blank'>Read more</Link>
            </motion.div>

            <motion.div className="ai-card"
                whileHover={{
                    scale: 1.1,
                }}
            >
                <img src="./assets/potato.jpg" alt="" />
                <h2>Potato Disease Classification</h2>
                <h5>This tool helps you identify common diseases affecting potato leaves using AI-powered image classification. 
                </h5>
                <Link className="ai-link" to={"https://potatoleafprediction.streamlit.app/"} target='blank'>Read more</Link>
            </motion.div>

            <motion.div className="ai-card"
                whileHover={{
                    scale: 1.1,
                }}
            >
                <img src="./assets/quiz.jpg" alt="" />
                <h2>Learning Style Quiz</h2>
                <h5>An app to help students describe their learning styles and what their course of study is then suggest study material based on their style. 
                </h5>
                <Link className="ai-link" to={"https://learning-styles-cnkzt59f3mrfj9pgt8hrby.streamlit.app/"} target='blank'>Read more</Link>
            </motion.div>

            <motion.div className="ai-card"
                whileHover={{
                    scale: 1.1,
                }}
            >
                <img src="./assets/gen.jpg" alt="" />
                <h2>Image Genarator</h2>
                <h5>
                </h5>
                <Link className="ai-link" to={"http://Boiki17.pythonanywhere.com"} target='blank'>Read more</Link>
            </motion.div>

            <motion.div className="ai-card"
                whileHover={{
                    scale: 1.1,
                }}
            >
                <img src="./assets/learn.jpg" alt="" />
                <h2>Intelligent Virtual Learning Environment</h2>
                <h5>This project is an AI-driven educational platform built to boost student performance. 
                </h5>
                <Link className="ai-link" to={"http://Unique12.pythonanywhere.com"} target='blank'>Read more</Link>
            </motion.div>

            <motion.div className="ai-card"
                whileHover={{
                    scale: 1.1,
                }}
            >
                <img src="./assets/medical.jpg" alt="" />
                <h2>Medical chatbot</h2>
                <h5>Medical chatbot provides medical recommendations based on your input, helping you make informed decisions about your health and well-being. 
                </h5>
                <Link className="ai-link" to={"https://medicalrecommendation.streamlit.app/"} target='blank'>Read more</Link>
            </motion.div>

        </div>
    </>
  )
}

export default More