import { createContext, useState } from 'react'
import axios from 'axios'


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
            errMsg: err.response.data.message
        })
    }

    const resetAuthErr = () => {
        setUserState({
            ...userState,
            errMsg: ''
        })
    }

    const login = async(creds) => {
        try {
            const  res = await axios.post(`${baseURL}/login`, creds)
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

    const signup = async(creds) => {
        try {
            return await axios.post(`${baseURL}/signup`, creds)
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

    const getServices = async() => {
        try {
            const res = await axios.get(`${baseURL}/services`)
            setServices(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    const getMassageStyles = async() => {
        try {
            const res = await axios.get(`${baseURL}/massageStyles`)
            setMassageStyles(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    const getBusinessInfo = async() => {
        try {
            const res = await axios.get(`${baseURL}/businessInfo`)
            setBusinessInfo(res.data[0])
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Context.Provider value={{
            ...userState,
            login,
            signup,
            logout,
            getServices,
            getMassageStyles,
            getBusinessInfo,
            resetAuthErr,
            businessInfo,
            services,
            massageStyles
        }}>
            {children}
        </Context.Provider>
    )
}