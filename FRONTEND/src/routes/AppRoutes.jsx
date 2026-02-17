import {Routes , Route} from "react-router-dom";
import Login from "../pages/auth/Login"
import Signup from "../pages/auth/Signup";
import Home from "../pages/public/Home";

const AppRoutes = () => {
    return (
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/" element={<Home/>} />


        </Routes>
    )
}

export default AppRoutes;