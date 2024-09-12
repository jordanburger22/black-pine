import { useState, useEffect, useContext } from 'react'
import './App.css'
import { Context } from './context/Context'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import LoginModal from './components/LoginModal'
import { Routes, Route, Navigate } from 'react-router-dom'
import Admin from './components/admin-pages/Admin'

function App() {

  const {
    getServices,
    getMassageStyles,
    getBusinessInfo,
    token,
    user
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
      <LoginModal open={open} handleClose={handleClose} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={token && user && user.role === 'admin' ? <Admin /> : <Navigate to='/' />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
