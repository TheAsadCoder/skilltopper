import React from 'react'
import DownloadIdCard from '../components/DownloadIdCard'
import Navbar from '../components/Navbar'

const DownloadIdCardPage = () => {
  return (
       <div className="min-h-screen bg-gray-900 w-full py-8 px-4">
          <Navbar />
          <DownloadIdCard />
        </div>
  )
}

export default DownloadIdCardPage