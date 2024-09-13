import { createContext, useState } from 'react'
import axios from 'axios'
import { GoogleLogin } from '@react-oauth/google'

export const Context = createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use((config) => {
        const token = localStorage.getItem('token')
        config.headers['Authorization'] = `Bearer ${token}`
        return config
    },
    (err) => Promise.reject(err)
)

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

    const addService = async (service) => {
        try {
            const res = await userAxios.post(`${baseURL}/services`, service)
            setServices(prevServices => [...prevServices, res.data])
        } catch (err) {
            console.log(err)
        }
    }

    const updateService = async(serviceId, update) => {
        try {
            const res = await userAxios.put(`${baseURL}/services/${serviceId}`, update)
            setServices(prevServices => prevServices.map(service => service._id === serviceId ? res.data : service))
        } catch (err) {
            console.log(err)
        }
    }

    const deleteService = async(serviceId) => {
        try {
            await userAxios.delete(`${baseURL}/services/${serviceId}`)
            setServices(prevServices => prevServices.filter(service => service._id !== serviceId))
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

    const addMassageStyle = async (massageStyle) => {
        try {
            const res = await userAxios.post(`${baseURL}/massageStyles`, massageStyle)
            setMassageStyles(prevMassageStyles => [...prevMassageStyles, res.data])
        } catch (err) {
            console.log(err)
        }
    }

    const updateMassageStyle = async(massageStyleId, update) => {
        try {
            const res = await userAxios.put(`${baseURL}/massageStyles/${massageStyleId}`, update)
            setMassageStyles(prevMassageStyles => prevMassageStyles.map(massageStyle => massageStyle._id === massageStyleId ? res.data : massageStyle))
        } catch (err) {
            console.log(err)
        }
    }

    const deleteMassageStyle = async(massageStyleId) => {
        try {
            await userAxios.delete(`${baseURL}/massageStyles/${massageStyleId}`)
            setMassageStyles(prevMassageStyles => prevMassageStyles.filter(massageStyle => massageStyle._id !== massageStyleId))
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
    

    const updateBusinessInfo = async (businessInfo) => {
        try {
            const res = await userAxios.put(`${baseURL}/businessInfo/66e0c83d43e46ce12080c148`, businessInfo)
            setBusinessInfo(res.data)
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
            googleLogin, // Add googleLogin to context
            getServices,
            getMassageStyles,
            getBusinessInfo,
            resetAuthErr,
            businessInfo,
            services,
            massageStyles,
            handleAuthErr,
            updateBusinessInfo,
            updateService,
            addService,
            updateMassageStyle,
            addMassageStyle,
            deleteService,
            deleteMassageStyle
        }}>
            {children}
        </Context.Provider>
    )
}
