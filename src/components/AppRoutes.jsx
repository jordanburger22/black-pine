import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import AdminLayout from './admin-pages/AdminLayout';
import AdminServices from './admin-pages/AdminServices';
import AdminMassage from './admin-pages/AdminMassage';
import AdminBusinessInfo from './admin-pages/AdminBusinessInfo';
// import AdminOrders from './AdminOrders'; // Add this component if needed
import { useContext } from 'react';
import { Context } from '../context/Context';

const AppRoutes = () => {
    const {token, user} = useContext(Context)

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={token && user && user.role === 'admin' ? <AdminLayout /> : <Navigate to='/' />}>
                <Route path='services' element={token && user && user.role === 'admin' ? <AdminServices /> : <Navigate to='/' />} />
                <Route path='massage' element={token && user && user.role === 'admin' ? <AdminMassage /> : <Navigate to='/' />} />
                <Route path='business-info' element={token && user && user.role === 'admin' ? <AdminBusinessInfo /> : <Navigate to='/' />} />
                {/* <Route path='orders' element={token && user && user.role === 'admin' ? <AdminOrders /> : <Navigate to='/' />} /> */}
            </Route>
        </Routes>
    );
};

export default AppRoutes;
