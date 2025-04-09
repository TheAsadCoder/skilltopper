import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BootstrapTopics, cssTopics, hostingTopics, htmlTopics, javascriptTopics, projects, tailwindTopics,  } from '../courseContent'
import { IoIosArrowDown } from "react-icons/io";
       
const CourseDetails = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const [tailwindOpen, setTailwindOpen] = useState(false);
  const [hostingOpen, setHostingOpen] = useState(false);


  const toggleBox = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };



  return (
    <div>
      <Link to="/">
              <button
              className="p-2 px-10 font-medium cursor-pointer text-[14px] rounded-full btn-shadow text-white bg-blue-700 hover:bg-[#4f38df] "
            >
              REGISTER NOW
            </button>

            </Link>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>

            <div className="w-full p-4 text-white flex flex-col justify-around btn-shadow border-2 rounded-2xl border-blue-700">
              <h1 className='font-bold text-gray-200'><span className='text-blue-300'>Fees:</span> 3,500 PKR</h1>
              <h1 className='font-bold text-gray-200'><span className='text-blue-300'>Duration:</span>  4 Months</h1>
              <h1 className='font-bold text-gray-200'><span className='text-blue-300'>Classes:</span>  4 Days a Week</h1>
              <h1 className='font-bold text-gray-200'><span className='text-blue-300'>Timing:</span>  7:30 PM to 9:00 PM</h1>
            </div>

            <div className="w-full p-4 text-white btn-shadow border-2 rounded-2xl border-blue-700 ">
              <h1 className='font-bold text-blue-400 pay'>Payment Methods:</h1>
              <div className="w-full h-[2px] rounded-full mt-2 bg-blue-400"></div>

{/* JazzCash */}
            <div className='mt-3'>
            <h1 className='font-bold'>Jazz Cash</h1>
              <h1 className='font-bold text-gray-200 text-[14px] md:text-md'> <span className='text-blue-300'>Account Name:</span> Muhammad Asad</h1>
              <h1 className='font-bold text-gray-200 text-[14px] md:text-md'> <span className='text-blue-300'>Account Number:</span> 03702575635</h1>
            </div>
{/* EasyPaisa */}
            <div className='mt-3'>
            <h1 className='font-bold'>Easypaisa</h1>
              <h1 className='font-bold text-gray-200 text-[14px] md:text-md'> <span className='text-blue-300'>Account Name:</span> Muhammad Asad</h1>
              <h1 className='font-bold text-gray-200 text-[14px] md:text-md'> <span className='text-blue-300'>Account Number:</span> 03702575635</h1>
            </div>
{/* Meezan Bank */}
            <div className='mt-3'>
            <h1 className='font-bold'>Meezan Bank</h1>
              <h1 className='font-bold text-gray-200 text-[14px] md:text-md'> <span className='text-blue-300'>Account Name:</span> Muhammad Asad</h1>
              <h1 className='font-bold text-gray-200 text-[14px] md:text-md'> <span className='text-blue-300'>IBAN:</span> PK69MEZN0000300110743767</h1>
            </div>

            </div>

            </div>

<h1 className='font-bold text-blue-400 mt-8 text-2xl course relative'>Course Content</h1>
<div className="w-full h-[2px] rounded-full mt-2 bg-blue-400"></div>

{/* HTML */}
<div className="max-w-5xl mx-auto mt-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-[20px] sm:text-3xl font-bold text-center mb-6 text-blue-400">
        HTML
      </h1>
      <div className="space-y-4">
        {htmlTopics.map((topic, index) => (
          <div
            key={index}
            className="bg-gray-800 border relative border-gray-700 rounded-2xl overflow-hidden shadow-md"
          >
            <button
              onClick={() => toggleBox(index)}
              className="w-full flex text-[14px] sm:text-[16px] justify-between items-center text-left p-4 font-semibold text-lg text-white bg-gray-700 hover:bg-gray-600 transition"
            >
              {topic.title}
              <IoIosArrowDown />
            </button>
            
            {openIndex === index && (
              <ul className="list-disc list-inside p-4 space-y-1 text-gray-300">
                {topic.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
            
          </div>
        ))}
      </div>
    </div>

{/* CSS */}
<div className="max-w-5xl mx-auto mt-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-[20px] sm:text-3xl font-bold text-center mb-6 text-blue-400">
        CSS
      </h1>
      <div className="space-y-4">
        {cssTopics.map((topic, index) => (
          <div
            key={index}
            className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-md"
          >
            <button
              onClick={() => toggleBox(index)}
              className="w-full flex text-[14px] sm:text-[16px] justify-between items-center text-left p-4 font-semibold text-lg text-white bg-gray-700 hover:bg-gray-600 transition"
            >
              {topic.title}
              <IoIosArrowDown />
            </button>
            {openIndex === index && (
              <ul className="list-disc list-inside p-4 space-y-1 text-gray-300">
                {topic.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* Bootstrap */}

    <div className="max-w-5xl mx-auto mt-6 bg-gray-900 text-white">
      <h1 className="text-[20px] sm:text-3xl font-bold text-center mb-6 text-blue-400">
        Bootstrap
      </h1>
      <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-md overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex text-[14px] sm:text-[16px] justify-between items-center text-left p-4 font-semibold text-lg text-white bg-gray-700 hover:bg-gray-600 transition"
        >
          {isOpen ? "Hide Topics" : "Show Topics"}
          <IoIosArrowDown />
        </button>
        {isOpen && (
          <ul className="list-disc list-inside p-4 space-y-1 text-gray-300">
            {BootstrapTopics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        )}
      </div>
    </div>

    {/* Tailwind css */}

    <div className="max-w-5xl mx-auto mt-6 bg-gray-900 text-white">
      <h1 className="text-[20px] sm:text-3xl font-bold text-center mb-6 text-blue-400">
        Tailwind CSS Course Outline
      </h1>
      <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-md overflow-hidden">
        <button
          onClick={() => setTailwindOpen(!tailwindOpen)}
          className="w-full flex text-[14px] sm:text-[16px] justify-between items-center text-left p-4 font-semibold text-lg text-white bg-gray-700 hover:bg-gray-600 transition"
        >
          {tailwindOpen ? "Hide Topics" : "Show Topics"}
          <IoIosArrowDown />
        </button>
        {tailwindOpen && (
          <ul className="list-disc list-inside p-4 space-y-1 text-gray-300">
            {tailwindTopics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        )}
      </div>
    </div>

    {/* JavaScript */}
    <div className="max-w-5xl mx-auto mt-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-[20px] sm:text-3xl font-bold text-center mb-6 text-blue-400">
        JavaScript
      </h1>
      <div className="space-y-4">
        {javascriptTopics.map((topic, index) => (
          <div
            key={index}
            className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-md"
          >
            <button
              onClick={() => toggleBox(index)}
              className="w-full flex text-[14px] sm:text-[16px] justify-between items-center text-left p-4 font-semibold text-lg text-white bg-gray-700 hover:bg-gray-600 transition"
            >
              {topic.title}
              <IoIosArrowDown />
            </button>
            {openIndex === index && (
              <ul className="list-disc list-inside p-4 space-y-1 text-gray-300">
                {topic.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* Hosting Topics */}

    <div className="max-w-5xl mx-auto mt-6 bg-gray-900 text-white">
      <h1 className="text-[20px] sm:text-3xl font-bold text-center mb-6 text-blue-400">
        GitHub and Netlify Hosting
      </h1>
      <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-md overflow-hidden">
        <button
          onClick={() => setHostingOpen(!hostingOpen)}
          className="w-full flex text-[14px] sm:text-[16px] justify-between items-center text-left p-4 font-semibold text-lg text-white bg-gray-700 hover:bg-gray-600 transition"
        >
          {hostingOpen ? "Hide Topics" : "Show Topics"}
          <IoIosArrowDown />
        </button>
        {hostingOpen && (
          <ul className="list-disc list-inside p-4 space-y-1 text-gray-300">
            {hostingTopics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
{/* Projects */}

<div className="max-w-5xl mx-auto mt-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-[20px] sm:text-3xl font-bold text-center mb-6 text-blue-400">Projects</h1>

      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-md mb-6"
        >
          <button
            onClick={() => toggleBox(index)}
            className="w-full flex text-[14px] sm:text-[16px] justify-between items-center text-left p-4 font-semibold text-lg text-white bg-gray-700 hover:bg-gray-600 transition"
          >
            {project.title}
            <IoIosArrowDown />
          </button>
          {openIndex === index && (
            <div className="p-4 text-gray-300">
              <p className="text-sm mb-2"><strong>Description:</strong> {project.description}</p>
              <p className="text-sm mb-2"><strong>Skills Used:</strong> {project.skills}</p>
              <ul className="list-disc list-inside space-y-1">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="text-sm">{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
    


<a href="https://wa.me/923702575635" target="_blank" className='fixed z-50 right-4 bottom-10  animate-pulse sm:animate-bounce sm:bottom-6'>
        <img src="./whatsapp.png" alt="whatsapp logo" className='h-10 w-10 sm:w-14 sm:h-14' />
        </a>
    </div>
  )
}

export default CourseDetails