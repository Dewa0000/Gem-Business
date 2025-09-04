import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({children}) => {
    const token = localStorage.getItem("token");
    if(!token){
        return <Navigate to="/login" replace></Navigate>
    }
    return children;
}

export default ProtectedRoutes;