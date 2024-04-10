import LoginPage from "../Components/Login";
import { Route,Routes } from "react-router-dom";

export default function AllRoutes(){
    return(
        <>
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
        </Routes>
        </>
    )
}