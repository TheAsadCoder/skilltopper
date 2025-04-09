import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    address: "",
    email: "",
    phone: "",
    cnic: "",
    dateOfBirth: "",
    gender: "",
    qualification: "",
    laptopAvailable: "",
    password: "",
    profilePic: null,
    paymentScreenshot: null,
  });

  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState({
    profilePic: null,
    paymentScreenshot: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    setFormData({ ...formData, [name]: file });

    // Generate preview URL
    if (file) {
      setPreview({ ...preview, [name]: URL.createObjectURL(file) });
    }
  };

  const isFormValid = () => {
    return Object.keys(formData).every((key) => {
      if (key === "profilePic" || key === "paymentScreenshot") {
        return formData[key] !== null; // Check if files are uploaded
      }
      return formData[key].trim() !== ""; // Check if text fields are filled
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/student/register`, 
        formDataToSend,

      );

      console.log('response', response);
      if (response.data.success) {
        toast.success(response.data.message);

        setFormData({
          fullName: "",
          fatherName: "",
          address: "",
          email: "",
          phone: "",
          cnic: "",
          dateOfBirth: "",
          gender: "",
          qualification: "",
          laptopAvailable: "",
          password: "",
          profilePic: null,
          paymentScreenshot: null,
        });
        setPreview({
          profilePic: null,
          paymentScreenshot: null,
        });
      }
    } catch (err) {
      console.error('err', err);
      setLoading(true);
      if (err.response.data) {

        if (err.response.data.errors?.length > 0) {
          toast.error(err.response.data.errors[0].msg);
        } else {
          toast.error(err.response.data.error);
        }
      } else {
        toast.error('Internel Server Error Please wait');
      }
  
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="max-w-3xl mx-auto bg-gray-800 shadow-2xl radius-bottom overflow-hidden">
      <Link to="/course-details"><button className="py-2 w-full bg-gray-600 flex items-center justify-center gap-2.5 text-white border border-[#4f38df] text-[14px] sm:text-[15px] font-bold shad">Course Details
        <span className="arrow"><FaArrowRightLong /></span>
      </button>
      </Link>
      <div className="p-5 md:p-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Profile Picture Upload */}
                      {/* Profile Picture Upload */}
                      <div className="flex flex-col items-center mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-700 mb-4">
                {preview.profilePic ? (
                  <img
                    src={preview.profilePic}
                    alt="Profile Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <label className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors text-[12px] sm:text-sm">
                <span>Upload Photo</span>
                <input
                  type="file"
                  name="profilePic"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>
            </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <input
              type="text"
              name="fatherName"
              placeholder="Father's Name"
              value={formData.fatherName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          {/* Gender and Qualification */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors appearance-none"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <select
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors appearance-none"
            >
              <option value="">Select Qualification</option>
              <option value="Primary">Primary</option>
              <option value="Middle">Middle</option>
              <option value="High School">High School</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Bachelor's">Bachelor's</option>
              <option value="Master's">Master's</option>
              <option value="PhD">PhD</option>
            </select>
          </div>

          {/* CNIC and Date of Birth */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="cnic"
              placeholder="CNIC / B-form"
              value={formData.cnic}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                const formattedValue = value
                  .replace(/^(\d{5})(\d{7})(\d{1})$/, "$1-$2-$3") // Format as xxxxx-xxxxxxx-x
                  .replace(/^(\d{5})(\d{1,7})$/, "$1-$2") // Format as xxxxx-xxxxxxx
                  .replace(/^(\d{1,5})$/, "$1"); // Format as xxxxx
                setFormData({ ...formData, cnic: formattedValue });
                }}
                maxLength="15"
                className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <div className="relative">
                <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors appearance-none cursor-pointer"
                onFocus={(e) => e.target.showPicker && e.target.showPicker()}
                />
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                </div>
              </div>
              </div>

              {/* Laptop Availability and Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <select
              name="laptopAvailable"
              value={formData.laptopAvailable}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors appearance-none"
            >
              <option value="">Do you have a Laptop or Computer?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          {/* Address */}
          <div className="grid grid-cols-1">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

            {/* Payment Screenshot */}
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="paymentScreenshot"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
              >
                {preview.paymentScreenshot ? (
                  <img
                    src={preview.paymentScreenshot}
                    alt="Payment Screenshot Preview"
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold text-center">
                        Click to upload
                      </span>{" "}
                      or drag and drop
                    </p>
                    <p className="text-md text-gray-500 font-bold dark:text-gray-400 underline text-center">
                      Payment Screenshot
                    </p>
                    <p className="text-md text-gray-400 font-bold text-center">
                      Fees: 3,500
                    </p>
                  </div>
                )}
                <input
                  id="paymentScreenshot"
                  type="file"
                  name="paymentScreenshot"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
{loading ? (
             <div
             className="p-2 px-10 rounded-md text-white bg-indigo-500 disabled:bg-gray-500"
           >
             Please wait....
           </div>
) : (
              <button
              type="submit"
              className="p-2 px-10 cursor-pointer rounded-md text-white bg-blue-500 hover:bg-blue-600 disabled:bg-gray-500 disabled:cursor-not-allowed"
              disabled={!isFormValid()}
            >
              SUBMIT
            </button>
)}
          </div>
        </form>
      </div>
    </div>
    <Toaster />
    </>
  );
};

export default Register;
