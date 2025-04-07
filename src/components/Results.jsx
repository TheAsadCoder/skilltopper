import React from 'react';
import { PiEmptyBold } from "react-icons/pi";

const Results = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mt-10 p-6 sm:p-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg shadow-2xl transform transition duration-500 ">
      <PiEmptyBold  className="text-yellow-300 text-5xl sm:text-7xl mb-4 animate-bounce" />
      <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">Empty!</h1>
      <p className="text-base sm:text-lg text-gray-100">
        Your results will be displayed here after completing the course. Keep up the great work!
      </p>
    </div>
  );
};

export default Results;
