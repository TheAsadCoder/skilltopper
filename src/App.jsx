import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import DownloadIdCardPage from "./pages/DownloadIdCardPage";
import ResultsPage from "./pages/ResultsPage";
import AdminSignupPage from "./pages/AdminSignupPage";
import VerifyAdminPage from "./pages/VerifyAdminPage";
import AllStudentsDataPage from "./pages/AllStudentsDataPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import { useProvider } from "./context/AuthContext";
import CourseDetailsPage from "./pages/CourseDetailsPage";

const App = () => {
  const { isAuthenticated } = useProvider();
  return (
    <Routes>
      <Route path="/" element={<RegisterPage />} />
      <Route path="/id-card" element={<DownloadIdCardPage />} />
      <Route path="/result" element={<ResultsPage />} />
      <Route path="/course-details" element={<CourseDetailsPage />} />
      {/* Admin Route */}
      <Route path="/admin" element={<AdminSignupPage />} />
      <Route path="/admin-login" element={<AdminLoginPage />} />
      <Route path="/verify-admin/:adminId" element={<VerifyAdminPage />} />


     <Route
     path="/all-students-data/:verifyId"
     element={isAuthenticated ? <AllStudentsDataPage /> : <Navigate to="/admin-login" />}
   />

   
    </Routes>
  );
};

export default App;
