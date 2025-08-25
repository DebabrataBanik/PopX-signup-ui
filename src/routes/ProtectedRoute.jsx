import { Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

const ProtectedRoute = ({ children }) => {
  const currentUser = useAuthStore(state => state.currentUser)

  if(!currentUser){
    return <Navigate to='/' replace />
  }

  return children;
}

export default ProtectedRoute;