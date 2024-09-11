import { useState, useEffect, useContext } from 'react'
import './App.css'
import { Context } from './context/Context'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {

  const {
    getServices,
    getMassageStyles,
    getBusinessInfo,
  } = useContext(Context)

  useEffect(() => {
    getServices()
    getMassageStyles()
    getBusinessInfo()
  }, [])

  return (
    <>
      <Navbar />
      <Home/>

      <Footer />
    </>
  )
}

export default App
