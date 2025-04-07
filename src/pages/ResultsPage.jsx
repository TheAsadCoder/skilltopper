import React from 'react'
import Results from '../components/Results'
import Navbar from '../components/Navbar'

const ResultsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 w-full py-8 px-4">
    <Navbar />
    <Results />
  </div>
  )
}

export default ResultsPage