import React, { useState, useRef, useCallback } from "react";
import { toPng } from "html-to-image";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { QRCodeCanvas } from "qrcode.react";

const DownloadIdCard = () => {
  const [cnic, setCnic] = useState("");
  const [loading, setLoading] = useState(false);
  const [studentData, setStudentData] = useState({});
  const [studentCardAvailable, setStudentCardAvailable] = useState(false);

  const ref = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cnic.length < 15) {
      toast.error("Please enter a valid CNIC.");
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/download-idCard`,
        { cnic }
      );
      if (response.data) {
        setStudentCardAvailable(true);
        setStudentData(response.data);
      }
    } catch (err) {
      setLoading(true);
      if (err.response.data) {
        if (err.response.data.errors?.length > 0) {
          toast.error(err.response.data.errors[0].msg);
        } else {
          toast.error(err.response.data.error);
        }
      } else {
        toast.error("Internel Server Error Please wait");
      }
    } finally {
      setLoading(false);
    }
  };

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();

        window.location.reload(); // Reload the page after download
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10">
        <div className="mb-5">
          <label
            htmlFor="cnic"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Enter CNIC
          </label>
          <input
            type="text"
            name="cnic"
            id="cnic"
            placeholder="CNIC / B-form"
            value={cnic}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
              const formattedCnic = value
                .replace(/^(\d{5})(\d{7})(\d{1})$/, "$1-$2-$3") // Format as xxxxx-xxxxxxx-x
                .replace(/^(\d{5})(\d{1,7})$/, "$1-$2") // Format as xxxxx-xxxxxxx
                .replace(/^(\d{1,5})$/, "$1"); // Format as xxxxx
              setCnic(formattedCnic);
            }}
            maxLength="15"
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
        {studentCardAvailable ? (
          <button
            onClick={onButtonClick}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-800 text-white p-2 rounded-lg"
          >
            Download Id Card
          </button>
        ) : (
          <button
            type="submit"
            className="w-full bg-[#4f38df] cursor-pointer text-white p-2 rounded-lg"
          >
            {loading ? "Please wait..." : "Submit"}
          </button>
        )}
      </form>

      {studentCardAvailable && (
        <div className="flex flex-col items-center justify-center mt-8">
          <div className="image-wrapper flex items-center flex-col">
            <div
              ref={ref}
              className="bg-white shadow-lg w-[555px]  h-[353px] scroll-auto rounded-lg relative overflow-hidden"
            >
              <img
                src="./student-card.png"
                alt="Student ID"
                className="w-[555px] h-[353px] fixed-image"
              />
              <div className="flex absolute items-center  gap-5 top-[55%] left-[7%]">
                <div className="w-[109px] rounded-sm h-[109px] p-1 border-2 border-blue-600 overflow-hidden">
                  <img
                    src={studentData.img ? studentData.img : "./user-logo.png"}
                    alt="Student"
                    className="w-full h-full rounded-sm cover border-2 cover border-black"
                  />
                </div>
                <div className="text-[13px] ">
                  <h2 className="font-bold text-gray-800">
                    <span className="text-black font-bold">Roll No:</span>{" "}
                    {studentData.rollNo}
                  </h2>
                  <h2 className="font-bold text-gray-800">
                    <span className="text-black font-bold">Name:</span>{" "}
                    {studentData.name}
                  </h2>
                  <h2 className="font-bold text-gray-800">
                    <span className="text-black font-bold">Father:</span>{" "}
                    {studentData.fatherName}
                  </h2>
                  <h2 className="font-bold text-gray-800">
                    <span className="text-black font-bold">CNIC:</span>{" "}
                    {studentData.cnic}
                  </h2>
                  <h2 className="font-bold text-gray-800">
                    <span className="text-black font-bold">Course:</span>{" "}
                    Frontend Development
                  </h2>
                </div>

                <QRCodeCanvas
                  value={`Roll No: ${studentData.rollNo}\nName: ${studentData.name}\nCNIC: ${studentData.cnic}\nCourse: Frontend Development`}
                  size={80}
                  className="ml-3 mt-4"
                />
              </div>
            </div>
          </div>

          <button
            onClick={onButtonClick}
            className="mt-6  bg-gradient-to-r from-blue-500 to-indigo-600 cursor-pointer text-white px-4 py-2 rounded-lg"
          >
            Download ID Card
          </button>
        </div>
      )}
      <Toaster />
    </>
  );
};

export default DownloadIdCard;
