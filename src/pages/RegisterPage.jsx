import React from "react";
import Register from "../components/Register";
import Navbar from "../components/Navbar";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 w-full py-8 px-4">
      <Navbar />
      <Register />
    </div>
  );
};

export default RegisterPage;
