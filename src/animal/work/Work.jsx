import { useState } from 'react'
import { motion } from 'framer-motion'
import './Work.css'

const handleFile = (media, img) => {

  if (img) {
    return (<>
      <img src={media} alt="" />
    </>)
  }
  return (<>
    <video src={media} controls />
  </>)
}

const Work = () => {
const [media, setMedia] = useState("src/assets/animals.jpg")
  const [image, setImage] = useState("src/assets/animals.jpg")
  const [dotImage, setDotImage] = useState("src/assets/animals.jpg")
  const [count, setCount] = useState("0")
  const [videoSrc, setVideoSrc] = useState('');
  const [file, setFile] = useState({})
  const [heat, setHeat] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [isImage, setIsImage] = useState(true)
  const [message, setMessage] = useState('')
  const [done, setDone] = useState(false)

  function handleChange(e) {
    let status
    const videoExt = ['mpg', 'mp2', 'mpeg', 'mpe', 'mpv', 'mp4']
    setMedia(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0])

    videoExt.map((ext) => {
      status = (e.target.files[0].type).includes(ext)
      if (status)
        return
    })
    status ? setIsImage(false) : setIsImage(true)
  }

  const handleFileSubmit = (e) => {
    e.preventDefault();
    const files = file
    const formData = new FormData()
    formData.append("file", files)
    setDone(false)
    // console.log(files)

    const Upload = async () => {
      await fetch("http://127.0.0.1:5001/animal", {
        method: 'POST',
        body: formData,
      })
        .then(
          respond => respond.json()
        )
        .then(
          data => {
            setMessage(data)
            if (data.message === "image") {
              setDone(true)
              setImage('data:image/jpeg;base64,' + data.image)
              setDotImage('data:image/jpeg;base64,' + data.dot)
              setCount(data.count)
            }
          }
        )
        .catch(
          err => console.log(err)
        )
    }

    const video_upload = async () => {
      await fetch("http://127.0.0.1:5001/animal", {
        method: 'POST',
        body: formData,
      })
        .then(
          respond => respond.json()
        )
        .then(
            data => {
              setDone(true)
              setCount(data.count)
              // console.log(data.video)
              const byteCharacters = atob(data.video);
              // console.log(byteCharacters)
              const byteNumbers = new Array(byteCharacters.length);
              for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
              }
              const byteArray = new Uint8Array(byteNumbers);
              const blob = new Blob([byteArray], { type: 'video/mp4' });
              const videoUrl = URL.createObjectURL(blob);
              console.log(data.heat)
              setHeat('data:image/jpeg;base64,' + data.heat)
              setVideoSrc(videoUrl);
            }
        )
        .catch(
          err => console.log(err)
        )
    }
    if (isImage)
      Upload()
    else
      video_upload()
    setLoaded(true)
  }
  return (
    <section className='animal-work'>
      <h1>Project</h1>
      <div className="animal-project">
        <form onSubmit={handleFileSubmit}>

          <input type="file" name="" id="file" onChange={handleChange} required />
          <br />

          {handleFile(media, isImage)}
          <br />
          <motion.div
            className="load-bar"
            style={{ display: loaded ? "grid" : "none" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: done ? 0 : [0, 1, 0] }}
            transition={{ repeat: done ? 0 : Infinity }}
          />
          <motion.button type='submit'
            whileTap={{ scale: 0.8 }}
          >Submit</motion.button>
        </form>

        <h2 style={{ display: done ? "grid" : "none" }}
        >Results:</h2>
        <div className="results" style={{ display: done & isImage ? "grid" : "none" }}>
          <div>
            <h3>Count:</h3>
            <h3>{count}</h3>
          </div>

          <div>
            <h3>Avarage Confidence:</h3>
            <h3>0%</h3>
          </div>
          <div className="images">
            <img src={image} alt="" />
          </div>
          <div className="images">
            <img src={dotImage} alt="" />
          </div>
        </div>
        <div className="video-results"
          style={{ display: done & !isImage ? "grid" : "none" }}
        >
          <video src={videoSrc} controls />
          <div className="images">
            <img src={heat} alt="" width={600} height={600} />
          </div>
          <div>
            <h3>Count:</h3>
            <h3>{count}</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work