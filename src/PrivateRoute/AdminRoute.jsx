/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"
import useAdmin from "../page/Hooks/useAdmin"
import { Navigate, useLocation } from "react-router-dom"

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const { isAdmin, isAdminLoading } = useAdmin()
    const location = useLocation()

    if (loading || isAdminLoading) {
       return <>
            <span className="loading loading-infinity loading-xs"></span>
            <span className="loading loading-infinity loading-sm"></span>
            <span className="loading loading-infinity loading-md"></span>
            <span className="loading loading-infinity loading-lg"></span>
        </>
    }
    if(user && isAdmin){
       return children
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
}

export default AdminRoute