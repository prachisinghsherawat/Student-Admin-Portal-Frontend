
import LoginPage from "../Components/Login";
import { Route,Routes } from "react-router-dom";
import AdminDashboard from "../Components/home/AdminDashboard";
import StudentDashboard from "../Components/home/StudentDashboard";
import TransactionDetails from "../Components/TransactionDetails";

export default function AllRoutes(){
    return (
      <>
        <Routes>
          <Route path="/" element={<TransactionDetails />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </>
    );
}