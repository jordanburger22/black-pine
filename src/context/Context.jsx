import { createContext, useState } from 'react'
import axios from 'axios'
import { GoogleLogin } from '@react-oauth/google'

export const Context = createContext()

export const ContextProvider = ({ children }) => {

    const baseURL = 'https://portfolio-server-zdov.onrender.com/blackpine'

    const initState = {
        user: JSON.parse(localStorage.getItem('user')) || null,
        token: localStorage.getItem('token') || '',
        errMsg: ''
    }

    const [userState, setUserState] = useState(initState)
    const [services, setServices] = useState([])
    const [massageStyles, setMassageStyles] = useState([])
    const [businessInfo, setBusinessInfo] = useState({})

    const handleAuthErr = (err) => {
        setUserState({
            ...userState,
            errMsg: err.response?.data?.message || err || 'An error occurred'
        })
    }

    const resetAuthErr = () => {
        setUserState({
            ...userState,
            errMsg: ''
        })
    }

    const login = async (creds) => {
        try {
            const res = await axios.post(`${baseURL}/auth/login`, creds)
            const { user, token } = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            setUserState({
                user,
                token,
                errMsg: ''
            })
        } catch (err) {
            console.log(err)
            handleAuthErr(err)
        }
    }

    const signup = async (creds) => {
        try {
            return await axios.post(`${baseURL}/auth/signup`, creds)
        } catch (err) {
            console.log(err)
            handleAuthErr(err)
        }
    }

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({
            user: null,
            token: '',
            errMsg: ''
        })
    }

    const googleLogin = async (tokenId) => {
        try {
            const res = await axios.post(`${baseURL}/auth/google`, { idToken: tokenId })
            const { user, token } = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            setUserState({
                user,
                token,
                errMsg: ''
            })
        } catch (err) {
            console.log(err)
            handleAuthErr(err)
        }
    }

    const getServices = async () => {
        try {
            const res = await axios.get(`${baseURL}/services`)
            setServices(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    const getMassageStyles = async () => {
        try {
            const res = await axios.get(`${baseURL}/massageStyles`)
            setMassageStyles(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    const getBusinessInfo = async () => {
        try {
            const res = await axios.get(`${baseURL}/businessInfo`)
            setBusinessInfo(res.data[0])
        } catch (err) {
            console.log(err)
        }
    }

    console.log(userState)

    return (
        <Context.Provider value={{
            ...userState,
            login,
            signup,
            logout,
            googleLogin, // Add googleLogin to context
            getServices,
            getMassageStyles,
            getBusinessInfo,
            resetAuthErr,
            businessInfo,
            services,
            massageStyles,
            handleAuthErr
        }}>
            {children}
        </Context.Provider>
    )
}
