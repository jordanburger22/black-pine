import { useState, useEffect, useContext } from 'react'
import './App.css'
import { Context } from './context/Context'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import LoginModal from './components/LoginModal'
import { Routes, Route, Navigate } from 'react-router-dom'
import Admin from './components/admin-pages/AdminLayout'
import AdminServices from './components/admin-pages/AdminServices'
import AdminMassage from './components/admin-pages/AdminMassage'
import AdminBusinessInfo from './components/admin-pages/AdminBusinessInfo'
import AppRoutes from './components/AppRoutes'

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
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
