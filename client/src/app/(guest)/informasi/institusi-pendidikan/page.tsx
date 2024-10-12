import InstitusiCard from '@/components/institusiCard'
import React from 'react'

const DaftarInstitusi: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb Section */}
            <div className="bg-gray-200 py-2 px-6">
                <p className="text-sm text-gray-600">
                    Informasi &gt; Daftar Institusi
                </p>
            </div>

            {/* Header Section */}
            <div
                className="container mx-auto text-center py-24"
                style={{
                    backgroundImage: 'url("/tugu_adipura.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    color: 'white',  // Ensure the text is visible over the background
                    height: '350px',
                }}
            >

                <h1 className="text-3xl md:text-5xl font-extrabold">
                    Daftar Institusi di Bandar Lampung
                </h1>
            </div>

            {/* Institutions Container */}
            <div className="container mx-auto py-8 flex justify-center items-center px-4 md:px-0">
                {/* Left Arrow for Slider Navigation */}
                <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 mr-4">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>

                {/* Institutions Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {/* Multiple Cards */}
                    <InstitusiCard/>
                    <InstitusiCard/>
                    <InstitusiCard/>
                </div>

                {/* Right Arrow for Slider Navigation */}
                <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 ml-4">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default DaftarInstitusi
