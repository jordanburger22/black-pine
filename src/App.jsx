import { useState, useEffect, useContext } from 'react'
import './App.css'
import { Context } from './context/Context'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import LoginModal from './components/LoginModal'

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

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Navbar handleOpen={handleOpen} />
      <Home />
      <LoginModal open={open} handleClose={handleClose} />
      <Footer />
    </>
  )
}

export default App
