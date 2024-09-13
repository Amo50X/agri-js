import './More.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import morebg from '../assets/bg-more.jpg'

const More = () => {
  return (
    <>
        <div className="bg-more"
            style={{backgroundImage: `url(${morebg})`}}
        />
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
                <h2>FarmExpect</h2>
                <h5>
                The AI can help you regarding anything to do with Farming, if you wanna start a business or a Farm
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
            
            <motion.div className="ai-card"
                whileHover={{
                    scale: 1.1,
                }}
            >
                <img src="./assets/interview.jpg" alt="" />
                <h2>AI-powered career guidance system</h2>
                <h5>The system guides users about the career choices and allows them to prepare for interview questions.
                </h5>
                <Link className="ai-link" to={"https://ai-career-guidances-arupi3ypbkexblqqwx6v3r.streamlit.app/#interview-tips"} target='blank'>Read more</Link>
            </motion.div>

            <motion.div className="ai-card"
                whileHover={{
                    scale: 1.1,
                }}
            >
                <img src="./assets/oral.jpg" alt="" />
                <h2>Oral Disease Diagnosis</h2>
                <h5>An app that allows patients to do self diagnosis for Oral diseases. By uploading an image and get the  predicted disease with description and suggested treatment.
                </h5>
                <Link className="ai-link" to={"https://oraldiseasesdiagnosis.streamlit.app/"} target='blank'>Read more</Link>
            </motion.div>
            <motion.div className="ai-card"
                whileHover={{
                    scale: 1.1,
                }}
            >
                <img src="./assets/doc.jpg" alt="" />
                <h2>CHAT WITH PDF</h2>
                <h5>
                This App allows user to upload their pdf and ask the app based on the document and if the answer is not available on the document it goes to the internet look for it and return to user 
                </h5>
                <Link className="ai-link" to={"https://finalchat-with-pdf-atjlnxqxu4kvees6oj3au7.streamlit.app/"} target='blank'>Read more</Link>
            </motion.div>
        </div>
    </>
  )
}

export default More