import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAdmin from "../../Hooks/useAdmin";
import Progress_bar from "../Progress_Bar/Progress_Bar";

// import { AuthContext } from "../Providers/AuthProviders";
// import useAdmin from "../../Hooks/useAdmin";


const Admin_Route = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <Progress_bar></Progress_bar>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default Admin_Route;