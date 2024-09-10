import './App.css'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Intro from './pages/Intro'
import Weed from './pages/Weed'
import Maize from './pages/Maize'
import Animal from './pages/Animal'
import Tomato from './pages/Tomato'

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Routes>
        <Route path='/' element={<Intro/>}/>
        <Route path='/weed' element={<Weed/>}/>
        <Route path='/maize' element={<Maize/>}/>
        <Route path='/animal' element={<Animal/>}/>
        <Route path='/tomato' element={<Tomato/>}/>
      </Routes>
      
    </>
  )
}

export default App
