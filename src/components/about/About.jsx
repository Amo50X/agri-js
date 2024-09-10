import { useState, useRef } from "react"
import "./About.css"
import { motion } from "framer-motion"

const About = () => {

    const [play, setPlay] = useState(false)
    const audioRef = useRef();


    const handleAudio = (audioPath) => {
        console.log("clicked")
        if (audioRef.current.paused && !play)
        {
            audioRef.current.src = audioPath
            audioRef.current.play()
            setPlay(true)
        }
        else if (play)
        {
            audioRef.current.pause()
            setPlay(false)
        }
            

        setPlay(!play)
    } 


  return (
    <section className="about">
        <audio  ref={audioRef}/>
        <motion.div className="text1"
            initial= {{ opacity: 0.5 }}
            whileInView={{ opacity : 1}}
            whileHover={{ scale : 0.9,
                borderRadius: "50px",
                borderStyle: "solid",
                borderWidth: "2px",
                borderColor: "#00ff26"
            }}
            exit={{ opacity: 0 }}
            transition={{
                type: 'spring'
            }}
        >
            <h3>
                Artificial Intelligence (AI) is revolutionizing the agricultural 
                industry, bringing unprecedented efficiency, precision, and 
                sustainability to farming practices. AI-driven technologies, such 
                as computer vision, machine learning, and predictive analytics, are 
                enabling farmers to make data-driven decisions that optimize crop 
                yields, reduce waste, and enhance resource management. From automated 
                irrigation systems that conserve water to drones that monitor crop 
                health, AI is transforming every aspect of agriculture.
            </h3>
            <button onClick={() => handleAudio("./audio/1.mp3")}/>
        </motion.div>
        <motion.div className="text2"
            initial= {{ opacity: 0.5 }}
            whileInView={{ opacity : 1}}
            whileHover={{ scale : 0.9,
                borderRadius: "50px",
                borderStyle: "solid",
                borderWidth: "2px",
                borderColor: "#00ff26"
            }}
            exit={{ opacity: 0 }}
            transition={{
                type: 'spring'
            }}
            style={{ translateX: "70%"}}
        >
            <h3>
                AI-enabled systems make weather predictions, monitor agricultural sustainability, 
                and assess farms for the presence of diseases or pests and undernourished plants using data like temperature, 
                precipitation, wind speed, and sun radiation in conjunction with photographs taken by satellites and drones.
            </h3>
            <button onClick={() => handleAudio("./audio/2.mp3")}/>
        </motion.div>
        <motion.div className="text3"
            initial= {{ opacity: 0.5 }}
            whileInView={{ opacity : 1}}
            whileHover={{ scale : 0.9,
                borderRadius: "50px",
                borderStyle: "solid",
                borderWidth: "2px",
                borderColor: "#00ff26"
            }}
            exit={{ opacity: 0 }}
            transition={{
                type: 'spring'
            }}
        >
            <h3>
                AI is revolutionizing agriculture with applications in weed detection, 
                animal counting, maize counting, and tomato classification. These 
                technologies utilize computer vision to automate critical tasks: 
                identifying and targeting weeds, accurately counting livestock, 
                estimating maize yields, and determining tomato ripeness. By enhancing 
                precision and efficiency, AI helps farmers optimize resource use, 
                reduce waste, and improve crop and livestock management, contributing 
                to more sustainable and productive agricultural practices.
            </h3>
            <button onClick={() => handleAudio("./audio/3.mp3")}/>
        </motion.div>
        
    </section>
  )
}

export default About