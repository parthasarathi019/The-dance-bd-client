import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useIsInstructor from "../../Hooks/useIsInstructor";
import Progress_bar from "../Progress_Bar/Progress_Bar";


const Instructor_Route = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isInstructor, isisInstructorLoading] = useIsInstructor();
    const location = useLocation();

    if(loading || isisInstructorLoading){
        return <Progress_bar></Progress_bar>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default Instructor_Route;
