import React, { useContext } from 'react';
import AwesomeLoader from '../../components/AwesomeLoader';
import Loader from '../../components/Loader';

import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../customHooks/useAdmin';



const AdminRoute = ({ children }) => {
    const { user, loading, logOut } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);

    if (loading || isAdminLoading) {
        return <AwesomeLoader/>
    }

    if (user && isAdmin) {
        return children;
    }
    return (
        logOut()
        .then(() => {})
        .catch((err) => console.log(err))
    )
};

export default AdminRoute;