import React from "react";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import DownloadIdCardPage from "./pages/DownloadIdCardPage";
import ResultsPage from "./pages/ResultsPage";
import AdminSignupPage from "./pages/adminSignupPage";
import VerifyAdminPage from "./pages/VerifyAdminPage";
import AllStudentsDataPage from "./pages/AllStudentsDataPage";
import AdminLoginPage from "./pages/AdminLoginPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RegisterPage />} />
      <Route path="/id-card" element={<DownloadIdCardPage />} />
      <Route path="/result" element={<ResultsPage />} />
      {/* Admin Route */}
      <Route path="/admin" element={<AdminSignupPage />} />
      <Route path="/admin-login" element={<AdminLoginPage />} />
      <Route path="/verify-admin/:adminId" element={<VerifyAdminPage />} />

      <Route
        path="/all-students-data/:verifyId"
        element={<AllStudentsDataPage />}
      />
    </Routes>
  );
};

export default App;
